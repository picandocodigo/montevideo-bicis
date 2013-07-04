require 'sinatra'
require 'github/markup'

get "/" do
  file = 'README.md'
  readme = GitHub::Markup.render(file, File.read(file))
  haml :index, locals: {readme: readme}
end
