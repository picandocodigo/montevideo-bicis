$LOAD_PATH.unshift(File.dirname(__FILE__))
require 'sinatra'
require 'lib/dead_people'

get '/' do
  haml :index, locals: {current_page: 'home'}
end

get '/data' do
  haml :data, locals: {data: DeadPeople.new, current_page: 'data'}
end

get '/leyes' do
  haml :leyes, locals: {current_page: 'leyes'}
end

get '/leyes/:ley' do
  ley = params[:ley]
  haml :"leyes/#{ley}", layout: :layout, locals: {current_page: 'leyes'}
end

get '/participar' do
  haml :participate, locals: {current_page: 'participar'}
end

get '/about' do
  haml :about, locals: {current_page: 'about'}
end

get '/mapa' do
  haml :map, locals: {current_page: 'mapa'}
end
