class ApplicationController < ActionController::Base
  
  helper_method :current_user, :logged_in?

  # sets the app's session token to be user's
  def login!(user)
    session[:session_token] = user.session_token
  end

  def logout!
    # reset session token of the app
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  # we'll load this in preload applicationstate
  def current_user
    # check for app's session
    return nil unless session[:session_token]
    # return or find user with matching session token
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def bookmark(type, add)
    if add
      @bookmark = current_user.bookmarks.new({ bookmarkable_type: type, bookmarkable_id: params[:id] })
      if @bookmark.save
        # return current user to update user from store
        render 'api/users/user', user: current_user
      else
        render json @bookmark.errors.full_messages, status: :unprocessable_entity
      end
    else
      @bookmark = current_user.bookmarks.where({ bookmarkable_type: type, bookmarkable_id: params[:id] }).first
      if @bookmark.destroy
        render 'api/users/user', user: current_user
      else
        render json @bookmark.errors.full_messages, status: :unprocessable_entity
      end
    end
  end

  def vote(type, add)
    if add
      @vote = current_user.votes.new({ voteable_type: type, voteable_id: params[:id] })
      if @vote.save
        render 'api/users/user', user: current_user
      else
        render json @vote.errors.full_messages, status: :unprocessable_entity
      end
    else
      @vote = current_user.votes.where({ voteable_type: type, voteable_id: params[:id] }).first
      if @vote.destroy
        render 'api/users/user', user: current_user
      else
        render json @vote.errors.full_messages, status: :unprocessable_entity
      end
    end
  end
  
end
