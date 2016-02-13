# Bicis en Montevideo

## Objetivo:
Este sitio pretende presentar información objetiva sobre andar en bicicleta en Montevideo y la reglamentación al respecto.

## Funcionalidades:

### Básico:

Mostrar mapa con infraestructura vial en Montevideo.

Mostrar la cantidad de accidentes de tránsito por año que involucren bicicletas y causas. Mostrar en un mapa la intersección (en lo posible, si no lo encuentra automáticamente, poder editar la ubicación).

### Otros
Agregar información (noticias, artículos, etc.) que van sacando los entes sobre el tema. En UNASEV hay montón de PDF's para procesar y ver qué más información pueden dar.

## Datos

Acá algunos de los datos que vengo encontrando:

  * https://catalogodatos.gub.uy/dataset/bicicircuitos-bicicletarios-estaciones-y-talleres-de-reparacion
  * [2012](http://unasev.gub.uy/inicio/sinatran/datons_abiertos/2012/) - Fallecidos 2012
  * [2011](http://unasev.gub.uy/inicio/sinatran/datos_abiertos/2011/) - Heridos y Fallecidos, Fallecidos por Departamento por mes, Fallecidos por Jurisdicción.

Se pueden pedir más datos comunicándonos con UNASEV directamente o a través de [Qué Sabés](http://quesabes.org/)

## Mapa

Basado en los [datos abiertos de la IM](https://catalogodatos.gub.uy/dataset/bicicircuitos-bicicletarios-estaciones-y-talleres-de-reparacion), convertir a GeoJson con `gdal-bin`:

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
