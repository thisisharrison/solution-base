class Api::PostsController < ApplicationController
  def index
    @posts = Post.includes(:author).includes(:topics).all
    render :index
  end

  def show
    @post = Post.includes(:author).includes(:topics).find(params[:id])
    render :show
  end

  def create
    @post = current_user.posts.new(post_params)

    if @post.save
      render :show
    else
      render json @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])

    if @post.update(post_params)
      render :show
    else
      render json @post.errors.full_messages, status: 422
    end  
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render :show, post: @post
  end

  private

  def post_params
    # creates PostTopics on entry
    params.require(:post).permit(:title, :body, topic_id: [])
  end
end
