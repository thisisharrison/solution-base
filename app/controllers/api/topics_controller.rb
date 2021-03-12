class Api::TopicsController < ApplicationController
  # for debugging
  protect_from_forgery :except => [:bookmark, :unbookmark]
  
  def index
    @topics = Topic.all
    render :index
  end

  def show
    if sort 
      @posts = Topic.find(params[:id]).sort_filter(sort).includes(:author).includes(:topics)
      @posts = params[:max] ? @posts.limit(params[:max]) : @posts
      render :show
    else
      @topic = Topic.find(params[:id])
      render :show
    end
  end

  def names
    @topics = Topic.all
    render 'api/topics/names'
  end

  # will not use these below for MVP
  def create
    @topic = Topic.new(topic_params)

    if @topic.save
      render :show
    else
      render json: @topic.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @topic = Topic.find(params[:id])

    if @topic.update(topic_params)
      render :show
    else
      render json: @topic.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @topic = Topic.find(params[:id])

    @topic.destroy
    render :show, topic: @topic
  end

  def bookmark
    result = make_bookmark('Topic', true)
    if result == true
      # success, render topic with updated bookmark 
      @topic = Topic.find(params[:id])
      render :show
    else
      # error
      render result
    end
  end

  def unbookmark
    result = make_bookmark('Topic', false)
    if result == true
      # success, render topic with updated bookmark 
      @topic = Topic.find(params[:id])
      render :show
    else
      # error
      render result
    end
  end

  private
  
  def topic_params
    params.reuqire(:topics).permit(:name, :description)
  end

  def sort
    params[:sort]
  end
end
