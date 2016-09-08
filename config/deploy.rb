require 'capistrano/ext/multistage'

set :stages, %w(testing production)
set :default_stage, 'testing'

set :application, "85.143.217.107"

set :deploy_to, "/var/www/fatsquash.ru/scentbird"
set :use_sudo, false
set :deploy_via, :copy
set :scm, :none

# Deploy hooks
after 'deploy:update', 'deploy:cleanup'
