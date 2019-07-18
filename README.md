# Gyro
Demo application. Operations on a bank account using Event Sourcing.
  
Symfony 4, Angular 8...  
DDD, CQRS, ES...

# Install

```bash
$ cd gyro
# -> gyro/
$ composer install
$ cd angular
# -> gyro/angular/
$ npm install
```

# Angular 
```bash
$ cd gyro/angular
$ ng serve
```

Build Frontend dev version on localhost
```bash
$ cd gyro/angular
$ ng build --base-href /gyro/public/
$ cp dist/* ../public -R
```

