class Api::TopicsController < ApplicationController
  def index
    @topics = Topic.all
    render :index
  end

  def show
    @topic = Topic.find(params[:id])
    render :show
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
      render json: @topic.errors.full_messages, status: 422
    end
  end

  def update
    @topic = Topic.find(params[:id])

    if @topic.update(topic_params)
      render :show
    else
      render json: @topic.errors.full_messages, status: 422
    end
  end

  def destroy
    @topic = Topic.find(params[:id])

    @topic.destroy
    render :show, topic: @topic
  end

  private
  
  def topic_params
    params.reuqire(:topics).permit(:name, :description)
  end
end
