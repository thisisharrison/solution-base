Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root" 
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :topics, only: [:index, :show]
    resources :posts, only: [:index, :show, :create, :update, :destroy] do
      resources :comments, only: [:create]
    end
    resources :comments, only: [:show, :update, :destroy]
    get 'topics_names', to: 'topics#names'
  end
end
