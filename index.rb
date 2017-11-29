# coding: utf-8
$LOAD_PATH.unshift(File.dirname(__FILE__))
require 'sinatra'
require 'lib/dead_people'

get '/' do
  haml :index, locals: {
         current_page: 'home',
         title: 'Inicio'
       }
end

get '/accidentes' do
  haml :data, locals: {
    data: {
      2012 => DeadPeople.new(2012),
      2013 => DeadPeople.new(2013),
      2014 => DeadPeople.new(2014),
      2015 => DeadPeople.new(2015),
      2016 => DeadPeople.new(2016),
    },
    current_page: 'data',
    title: 'Datos de accidentes de tránsito en bicicleta'
  }
end

get '/leyes' do
  haml :leyes, locals: {
         current_page: 'leyes',
         title: 'Leyes de tránsito y seguridad vial'
       }
end

get '/leyes/:ley' do
  ley = params[:ley]
  haml :"leyes/#{ley}", layout: :layout, locals: {
                      current_page: 'leyes',
                      title: "Ley Nº #{params[:ley]}"
                    }
end

get '/enlaces' do
  haml :enlaces, locals: {
         current_page: 'enlaces',
         title: 'Sitios de interés'
       }
end

get '/acercade' do
  haml :about, locals: {
         current_page: 'about',
         title: 'Acerca de'
       }
end

get '/mapa' do
  haml :map, locals: {
         current_page: 'mapa',
         title: 'Mapa de Montevideo'
       }
end

not_found do
  status 404
  haml :error404, locals: {
         current_page: '404',
         title: 'Error 404 - Página no encontrada'
       }
end
