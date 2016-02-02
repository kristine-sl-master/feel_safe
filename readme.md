
FeelSafe
=======
> **Warning**  
> Will actually play alarm sound when you press alarm button!

This application is made as a part of an assignment in MA210 Mobile Computing at Westerdals Oslo ACT. This is a proof of concept for an app that improves personal security, by providing tools for location tracking, contacting police and emergency contacts, sharing tracking data and sounding an audible alarm. 

As this is a proof of concept, it is not functional, with the exception of the audible alarm. 

Dependencies 
-----------------
This app uses npm as a package manager for all it's dependencies. Because committing all the files for all the libraries would be messy, all node modules have been ignored for this Github repo. Because of this, if you want to launch the source code yourself, you will need to run the following command to install all dependencies: 

    npm install 
    
The app has the following dependencies: 

###Angular

Angular is used to make the site interactive, and to allow rapid implementation of new functionality. 

I have also utilised the following third-party angular libraries: 
> - **angular-route**
> Allows easy route-management, and enables the project to have one index.html file, which contains the navigation bar, common for all parts of the application, and have the rest of the view change dynamically. 

###Gulp

Gulp is used for rapid development, and makes it much easier to make very readable source code, enabling use of tools like sass. The following dependencies are utilised by Gulp: 

> **gulp-sass**
> Compiles all the .scss files into one .css file which is used to style the application
> 
> **gulp-plumber**
> Prevents the gulp pipe from breaking if any errors are cast
> 
> **gulp-debug**
> Makes it possible to trace errors back to the original source code
>  
> **gulp-concat**
> Enables files to be concatenated, which makes it much easier to divide javascript code into separate files for separate functionalities, without having to import then all by hand in *index.html*
>   
> **gulp-order**
> Enables the developer to specify the order in which to treat and pipe the files. This is useful to make sure that all angular modules are initialised before the rest of the javascript code.
>  
> **gulp-uglify**
>  Minimises javascript files.
>   
> **gulp-ng-annotate**
> Ensures that all angular files are annotated correctly with its dependencies, to ensure it has no provider issues, even when minimised.
>  
> **gulp-js-validate**
> Validates the javascript.
>  
> **browsersync**
> A dependency which enables synchronising a port on localhost (in my case, localhost:3000) which acts as a webserver for the files for testing. It also creates an external access point on the local IP-address, which allows testing on other devices than the one used to develop, including testing on mobile. It even synchronises the scroll and position of the screen on both screens, if you have them both up at the same time. 