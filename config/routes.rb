Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root" 
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :topics, except: [:edit, :new]
    resources :posts, only: [:index, :show]
    get 'topics_names', to: 'topics#names'
  end
end
