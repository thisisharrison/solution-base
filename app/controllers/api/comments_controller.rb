class Api::CommentsController < ApplicationController
  # for debugging
  protect_from_forgery :except => [:vote, :unvote]

  def create
    @comment = current_user.comments.new(comment_params)
    @comment.post_id = params[:post_id]

    if @comment.save
      render :show
    else
      render json @comment.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @comment = Comment.find(params[:id])
  end
  
  def update
    @comment = Comment.find(params[:id])

    if @comment.update(comment_params)
      render :show
    else
      render json @comment.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show, comment: @comment
  end

  def vote
    result = make_vote('Comment', true)
    if result == true
      # success, render topic with updated bookmark 
      @comment = Comment.find(params[:id])
      render :show
    else
      # error
      render result
    end
  end

  def unvote
    result = make_vote('Comment', false)
    if result == true
      # success, render topic with updated bookmark 
      @comment = Comment.find(params[:id])
      render :show
    else
      # error
      render result
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :parent_comment_id)
  end

end
