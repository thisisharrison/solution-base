class Api::PostsController < ApplicationController
  # for debugging
  # protect_from_forgery :except => [:bookmark, :unbookmark, :vote, :unvote]
  before_action :require_sign_in!, except: [:index, :show]

  def index
    @posts = sort ? Post.sort_filter(sort).includes(:author).includes(:topics).limit(5) : 
      Post.includes(:author).includes(:topics).limit(5)
    render :index
  end

  def show
    @post = Post.includes(:author).includes(:topics).includes(:comments).find(params[:id])
    render :show
  end

  def create
    @post = current_user.posts.new(post_params)
    # creates PostTopics on entry
    @post.topic_ids = params[:post][:topic_ids].split(",").map { |str| str.to_i }

    if @post.save
      render :show
    else
      render :json => @post.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @post = Post.find(params[:id])
    @post.topic_ids = params[:post][:topic_ids].split(",").map { |str| str.to_i }

    if @post.update(post_params)
      render :show
    else
      render :json => @post.errors.full_messages, status: :unprocessable_entity
    end  
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render :show, post: @post
  end

  def bookmark
    result = make_bookmark('Post', true)
    if result == true
      # success, render topic with updated bookmark 
      @post = Post.find(params[:id])
      render :show
    else
      # error
      render result
    end
  end

  def unbookmark
    result = make_bookmark('Post', false)
    if result == true
      # success, render topic with updated bookmark 
      @post = Post.find(params[:id])
      render :show
    else
      # error
      render result
    end
  end

  def vote
    result = make_vote('Post', true)
    if result == true
      # success, render topic with updated bookmark 
      @post = Post.find(params[:id])
      render :show
    else
      # error
      render result
    end
  end

  def unvote
    result = make_vote('Post', false)
    if result == true
      # success, render topic with updated bookmark 
      @post = Post.find(params[:id])
      render :show
    else
      # error
      render result
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :body, :post_type, :problem_id)
  end

  def sort
    sort = params[:sort].nil? ? 'most recent' : params[:sort]
    topic_id = params[:topic_id]
    post_type = params[:post_type]
    { :sort => sort, :topic_id => topic_id, :post_type => post_type }
  end
end
