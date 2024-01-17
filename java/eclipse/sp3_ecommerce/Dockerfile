# Entorno de ejecución para aplicaciones java basado en OpenJDK 17
FROM azul/zulu-openjdk:17-lastest
# copia el archivo .jar de la aplicación al directorio raíz del contenedor
# y le cambie el nombre a app.jar
COPY build/libs/sp3_ecommerce-0.0.1-SNAPSHOT app.jar
# Cuando se inicia el contenedor ejecutará el comando java -jar app.jar
# para iniciar la aplicación
ENTRYPOINT ["java","-jar","/app.jar"]
EXPOSE 8080