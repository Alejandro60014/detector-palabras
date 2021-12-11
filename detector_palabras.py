import re
import operator

frase = input("Introduce tu frase aquí:")
frase = re.sub("\!|\?|\¡|\¿|\,|\.", "", frase)
palabras1 = frase.split(" ")
palabras = {}
for i in range(len(palabras1)):
    if palabras1[i] not in palabras:
        palabras[palabras1[i]] = 1
    else:
        valor = palabras.get(palabras1[i])
        palabras[palabras1[i]] = valor + 1

maxima_palabra = max(palabras.items(), key=operator.itemgetter(1))[0]
print("La palabra que más aparece en tu frase es " + maxima_palabra + " y ha aparecido " + str(palabras.get(maxima_palabra)) + " veces.")
