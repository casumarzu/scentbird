# production.rb
set :deploy_to, '/var/www/fatsquash.ru/scentbird'
set :rails_env, :production

# Настраиваем ssh до сервера
server "85.143.217.107", :app, :web, :db, :primary => true

# Авторизационные данные
set :user, "root"
set :group, "root"
set :keep_releases, 5
set :repository, 'dist'
