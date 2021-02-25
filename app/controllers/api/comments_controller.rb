class Api::CommentsController < ApplicationController
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

  private

  def comment_params
    params.require(:comment).permit(:body, :parent_comment_id)
  end

end
