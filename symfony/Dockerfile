FROM php:8.1-apache

# Installer les dépendances nécessaires, les extensions PHP, y compris intl
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libicu-dev \
    && docker-php-ext-install pdo pdo_mysql opcache intl

# Activer les modules nécessaires d'Apache
RUN a2enmod rewrite

# Installer Composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php --install-dir=/usr/local/bin --filename=composer \
    && php -r "unlink('composer-setup.php');"

# Copier le fichier de configuration Apache personnalisé
COPY apache-config.conf /etc/apache2/sites-available/000-default.conf

# Définir le répertoire de travail
WORKDIR /var/www/html

# Changer la propriété du dossier /var/www pour www-data
RUN chown -R www-data:www-data /var/www

# Copier le code source de l'application dans le conteneur
COPY . /var/www/html

# Donner les permissions appropriées
RUN chmod -R 755 /var/www/html

# Exposer le port 80
EXPOSE 80

# Configurer les paramètres PHP, par exemple, augmenter le temps d'exécution maximal
RUN echo 'max_execution_time = 120' >> /usr/local/etc/php/conf.d/my-custom.ini
