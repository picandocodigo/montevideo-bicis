# Bicis en Montevideo

## Objetivo:
Este sitio pretende presentar información objetiva sobre andar en bicicleta en Montevideo y la reglamentación al respecto.

## Desarrollo

App web simple basada en [Sinatra](http://sinatrarb.com/):

```bash
$ bundle install
$ bundle exec shotgun
```

Ver en http://localhost:9393

## Funcionalidades:

### Básico:

- [x]  Mostrar mapa con infraestructura vial en Montevideo.

- [x] Mostrar la cantidad de accidentes de tránsito por año que involucren bicicletas y causas.

- [ ] Mostrar en un mapa la intersección (en lo posible, si no lo encuentra automáticamente, poder editar la ubicación) de accidentes de tránsito involucrando bicicletas.

- [ ] Agregar información (noticias, artículos, etc.) publicadas por los entes y gobierno sobre el tema. (Ver PDF's [en UNASEV](https://www.gub.uy/unidad-nacional-seguridad-vial/datos-y-estadisticas/estadisticas) por ejemplo).

## Datos

Algunos de los datos que vengo encontrando:

  * [Bicicircuitos, bicicletarios, estaciones y talleres de reparación, Montevideo](https://catalogodatos.gub.uy/dataset/intendencia-montevideo-bicicircuitos-bicicletarios-estaciones-y-talleres-de-reparacion)
  * [2013-2018](https://catalogodatos.gub.uy/dataset/unasev-fallecidos_siniestros_transito)  Fallecidos en siniestros de tránsito por año 2013 - 2018.
  * [2012](https://catalogodatos.gub.uy/dataset/unasev-serie-de-personas-fallecidas-en-siniestros-de-tr-nsito-en-el-a-o-2012-en-uruguay) - Fallecidos 2012
  * [2011](https://catalogodatos.gub.uy/dataset/unasev-siniestros-de-tr-nsito-en-uruguay-en-el-a-o-2011) - Heridos y Fallecidos, Fallecidos por Departamento por mes, Fallecidos por Jurisdicción.

Se pueden pedir más datos comunicándonos con UNASEV directamente o a través de [Qué Sabés](http://quesabes.org/)

## Mapa

Basado en los [datos abiertos de la Intendencia de MontevideoM](https://catalogodatos.gub.uy/dataset/intendencia-montevideo-bicicircuitos-bicicletarios-estaciones-y-talleres-de-reparacion), convertir a GeoJson con `gdal-bin`:

```
$ sudo apt-get install gdal-bin
$ ogr2ogr -f GeoJSON -t_srs crs:84 bicicircuitos.geojson v_bi_bicicircuitos.shp
```

Mover `bicicircuitos.geojson` a `public`.

## Brainstorm (ideas)

### Bolin:
Para mi, más allá de si compartís o no las reglamentaciones de la ley, no tiene sentido que hayan exigencias cuando ni siquiera se dice como debe circular una bicicleta y el resto del tránsito alrededor de la misma. Por ejemplo: en un carril solo bus, por dónde circulo? Por el mismo carril solo bus a la derecha o voy por el carril izquierdo contra el lado derecho?

Es más seguro andar con cuidado y respetando las normas, que usando casco, timbre, reflectores, espejos y todo lo que quiera la IMM. Me parece más práctico que hubiese una campaña de seguridad vial para bicicletas (que hace bastante falta, me cruzo con gente andando contramano y sin luces en plena oscuridad día por medio).

Capaz mirando los datos se podría ver si hay más accidentes en calles importantes (sospecho que si), con más tráfico, que son justamente las que tienen espacio como para hacer una buena ciclovía.
