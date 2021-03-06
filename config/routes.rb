Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root" 
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :topics, only: [:index, :show] do 
      member do 
        post 'bookmark'
        post 'unbookmark'
      end
    end
    resources :posts, only: [:index, :show, :create, :update, :destroy] do
      resources :comments, only: [:create]
      member do 
        post 'vote'
        post 'unvote'
        post 'bookmark'
        post 'unbookmark'
      end
    end
    resources :comments, only: [:show, :update, :destroy] do 
      member do 
        post 'vote'
        post 'unvote'
      end
    end
    get 'topics_names', to: 'topics#names'
    post 'demo', to: 'users#demo'
  end
end
