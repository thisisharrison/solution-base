class Api::UsersController < ApplicationController
  # for debugging
  protect_from_forgery :except => [:create, :show]
  
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render json: ['User not found'], status: 401 if @user.nil?
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end