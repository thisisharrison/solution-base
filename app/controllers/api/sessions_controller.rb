class Api::SessionsController < ApplicationController
  # for debugging
  protect_from_forgery :except => [:create, :destroy]

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user.nil?
      render json: ['Wrong credentials'], status: 401
    else
      login!(@user)
      render 'api/users/show'
    end
  end

  def destroy
    if current_user.nil?
      render json: ["No Current User"], status: 404
    end
    logout!
    render json: {}
  end
end
