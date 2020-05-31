
                var app=angular.module("myApp",["ngRoute"]);
                app.config(function($routeProvider)
                {
                    $routeProvider
                    .when("/",{
                        template :`
                        <h4 style="color:green; font-weight:normal;text-align:center">Introduction To Angular JS</h4><hr style="color:black">
                        <h6>Definition</h6>

AngularJs is a Javscript open source front-end framework that is mainly used to develop single page web applications(SPAs).It is a continously growing and expanding framework which provides better ways for developing web applications.It changes the static HTML to dynamic HTML.It’s features like dynamic binding and dependency injection eliminates the need of code that we have to write otherwise.AngularJs is rapidly growing and because of this reason we have different versions of AngularJs with the latest stable being 1.7.7 . It is also important to note that Angular is different from AngularJs. It is an open source project which can be freely used and changed by anyone.It extends HTML attributes with Directives, and data is binded with HTML. <br> <br>

<h6>History:</h6>

AngularJs was originally developed in 2008-2009 by Misko hevery and Adam abrons,and is now maintained by google. <br><br>

 <h6>Why use it?</h6>

Easy to work with:All you need to know to work with AngularJs is basics of HTML,CSS and Javascript,not necessary to be an expert in these technologies.
Time saving:AngularJs allows us to work with components and hence we can use them again which saves time and unnecessary code.
Ready to use template:AngularJs is mainly plain HTML,and it mainly makes use of the plain HTML template and passes it to the DOM and then the AngularJS compiler.It traverses the templates and then they are ready to use. <br><br>
 <h6>Key Features:</h6>

 <b> Model View Controller(MVC):</b> <br>
An architecture that is basically a software pattern used to develop an application. It consists of three components in general, they are: <br><br>

 <b>Model:</b> used to manage the application data. <br> <br>
 <b>View:</b> responsible for displaying the application data. <br> <br>
 <b>Controller:</b> main job is to connect the model and the view component.
Normally when we talk about MVC architecture, we have to split our applications into these three components and then write the code to connect them. However, in AngularJs all we have to do is split the application into MVC and it does the rest by itself. It saves a lot of time and allows to finish the job with less code. <br> <br>

<b>Data Model Binding: </b> <br>
Data Binding in AngularJS is a two-way process,i.e the view layer of the MVC architecture is an exact copy of the model layer. You don’t need to write special code to bind data to the HTML controls. Normally in other MVC architectures, we have to continuously update the view layer and the model layer to remain in sync with one another. In AngularJs it can be said that the model layer and the view layer remain synchronized with each other. Like when the data in the model changes, then the view layer reflects the change and vice versa. It happens immediately and automatically which helps in making sure that the model and the view is updated all times.
<br> <br>
<h6>Templates: </h6>
On the main advantage of using AngularJS is how it makes use of the templates. Normally what happens is that the templates are passed by the browser into DOM, then DOM becomes the input of the AngularJS compiler and then AngularJS traverses the DOM template for rendering instructions which are called directives. The other siblings of AngularJS work differently as they make use of the HTML String whereas AngularJs does not manipulate the template strings. Using the DOM is what gives us the privilege to extend the directive vocabulary or even abstract them into reusable components.<br> <br>

<h6>Unit Testing ready:- </h6> The concern of Google’s designer was not only developed Angular but also developed a testing framework called “Karma” which helps in designing unit tests for AngularJS applications. <br> <br>

<h5>Benefits of AngularJS: </h5>

<b>Depending Injection: </b> Dependency Injection is a software design pattern. It works on the basis of Inversion of Control. Inversion control means objects do not create other objects. Instead, they get these objects from an outside source. The dependent object is not created by the primary object after that then use its methods. Instead, an external source creates the dependent object and gives it to the source object for further usage. On the basis of dependency injection, we create a service to acquire all the information from the database and get into the model class.
In Angular.JS, dependencies are injected by using an “injectable factory method” or “constructor function”. <br><br> `
                    })
                    .when("/Dr",{
                        template : `<h4 style="color:green; font-weight:normal;text-align:center">AngularJS Directives</h4><hr style="color:black"><br><br>
<pre>
    We used directives in our first AngularJS application section. 
    Here, we will learn directives in detail.

Directives are markers on a DOM element that tell AngularJS to attach 
a specified behavior to that DOM element or even transform the DOM element 
and its children. In short, it extends the HTML.

Most of the directives in AngularJS are starting with ng- where ng stands 
for Angular. 
AngularJS includes various built-in directives. 
In addition to this, you can create custom directives for your application.
</pre>
The following table lists the important built-in AngularJS directives.


<table>
    <tr>	
        <th>Directive</th>
        <th>Description</th>
    </tr>


    


 
<tr>	
        <td>ng-app</td>
        <td>Auto bootstrap AngularJS application.</td>
    </tr>
    	        
    <tr>
        <td>ng-init	</td>
        <td>Initializes AngularJS variables</td>
    </tr>
    
    <tr>
        <td>ng-model</td>
        <td>Binds HTML control's value to a property on the $scope object.</td>
    </tr>
    
    <tr>
        <td>ng-controller</td>
        <td>Attaches the controller of MVC to the view.</td>
    </tr>
    <tr>

        <td>ng-app </td>
        <td>directive initializes AngularJS and makes the specified element a root element</td>
    </tr>
    <tr>
        <td>ng-bind	</td>
        <td>Replaces the value of HTML control with the value of specified AngularJS expression.</td>
    </tr>
    <tr>

        <td>ng-show	</td>
        <td>Display HTML element based on the value of the specified expression.</td>
    </tr>
    <tr>
	
        <td>ng-repeat</td>
        <td>Repeats HTML template once per each item in the specified collection.
</td>
    </tr>
    <tr>
	
        <td>ng-click</td>
        <td>Specifies custom behavior when an element is clicked.</td>
    </tr>
    
    </table>
    <hr>
    <br><br>
 `})
                    .when("/Rt",{
                        template : `<h4 style="color:green; font-weight:normal;text-align:center">Routing </h4><hr style="color:black">
                        
<pre>AngularJS Routing
We can build Single Page Application (SPA) with AngularJS.
It is a web app that loads a single HTML page and dynamically updates that page 
as the user interacts with the web app.


AngularJS supports SPA using routing module ngRoute.
This routing module acts based on the url.
When a user requests a specific url, the routing engine
captures that url and renders the view based on the defined routing rules.

Let's see how to implement simple routing in AngularJS application.

Routing Example 1 
<a href=
"https://www.tutorialsteacher.com/angularjs/angularjs-routing">
    index.html</a>
                   
The first step is to include angular.js, angular-route.js, and bootstrap.css in 
the index.html.
The angular-route.js includes necessary functions for routing. Apply ng-app
directive.

Apply ng-view directive to <div> or other elements where you want to inject 
another child view. AngularJS routing module 
uses ng-view directive to inject another child view where it is defined. 
Therefore, Angular will inject login.html or student.html inside this div element.
Now, create an application module and specify 'ngRoute' as a dependency module.
Now, we need to configure the routing rules that need to compile before any 
other module of an application. So, use config() method to configure the routing 
rules using $routingProvider object.

Use $routeProvider.when(path, route) method to configure routing rules, where 
the first parameter is request URL and the second parameter is an object which 
contains controller, template, or other properties. 
In the above example, we specified that if user request for "/" URL, meaning 
the base url then inject login.html and loginController. 


In the same way, if a user requests  for "/student/:username" url then 
inject student.html  and studentController. The :username would be url parameter.
Use otherwise() method to redirect to base url if user request for the URL other 
than configured rules. Now, define loginController which attaches authenticate() 
funtion to the $scope. The authenticate() method redirects to "/student/username/"
 using $location service. Define studentController which attaches username
  property to $scope, to display user name in the view. 
 Notice that $routeParams is used to get the value of url parameter supplied from 
 login view.

 Create login.html as shown below, which contains username
 and password input box with validation. Please note that we are using 
 bootstrap.css</pre>`
                    })

                    .when("/Mod",{
                        template : `<h4 style="color:green; font-weight:normal;text-align:center">Modules</h4><hr style="color:black">
<pre>
    
A module in AngularJS is a container of the different parts of an application 
such as controller, service, filters, directives, factories etc. It supports 
separation of concern using modules.

AngularJS stops polluting global scope by containing AngularJS specific functions
in a module.

Application Module
An AngularJS application must create a top level application module. 
This application module can contain other modules, controllers, filters, etc.    
<hr>
&lt;!DOCTYPE html &gt;
&lt;html&gt; 
&lt;head &gt;
&lt; script src="~/Scripts/angular.js"&gt;  &lt;/script &gt;
&lt;/head&gt;
&lt;body ng-app="myApp" &gt;
    @* HTML content *@
    &lt;script &gt;
        var myApp = angular.module('myApp', []); 
        myApp.controller("myController", function ($scope) {
    $scope.message = "Hello Angular World!";
});
        &lt;/script &gt;
&lt;/body &gt;
&lt;/html &gt;
<hr>
<hr>
Result: 
<h4>AngularJS Module Demo:</h4>
Hello Angular World!
<hr>

In the above example, the angular.module() method creates an application 
module, where the first parameter is a module name which is same as 
specified by ng-app directive.The second parameter is an array of other 
dependent modules []. In the above example we are passing an empty array 
because there is no dependency.

Note: The angular.module() method returns specified module object if no 
dependency is specified. Therefore, specify an empty array even if the 
current module is not dependent 
on other module. Now, you can add other modules in the myApp module.

The following example demonstrates creating controller module in myApp module.

</pre>`})

                     
                    
                    .when("/Flt",{
                        template : `<h4 style="color:green; font-weight:normal;text-align:center">Filters </h4><hr style="color:black">

<pre>
AngularJS Filters allow us to format the data to display on UI without 
changing original format.

Filters can be used with an expression or directives using pipe | sign.

{{expression | filterName:parameter }}
</pre>
Angular includes various filters to format data of different data types. 
<br><br><font color=crimson>The following table lists important filters.</font>
<br><hr>
<table>
<tr><th>Filter Name</th>
    <th>Description</th>
</tr>
	
<tr>
    <td>Number</td>
    <td>Formats a numeric data as text with comma and fraction.</td>
    </tr>

	
<tr>
    <td>Currency</td>
    <td>Formats numeric data into specified currency format and fraction.</td>
    </tr>
	

<tr>
    <td>Uppercase</td>
    <td>Converts string to upper case.</td>
    </tr>

	

<tr>
    <td>Date	</td>
    <td>Formats date to string in specified format.</td>
    </tr>	

    <tr>
        <td>Filter</td>
        <td>Filters an array based on specified criteria and returns new array.</td>
        </tr>
	
<tr>
    <td>Lowercase</td>
    <td>Converts string to lower case.</td>
    </tr>
	
<tr>
    <td>orderBy</td>
    <td>Sorts an array based on specified predicate expression.</td>
    </tr>
	
<tr>
    <td>Json</td>
    <td>Converts JavaScript object into JSON string</td>
    </tr>
    <tr>
        <td>limitTo	</td>
        <td>Returns new array containing specified number of elements from an existing array.</td>
        </tr>
    
</table><br><br>

                        
                        `
                    })
                    .when("/Exp",{
                        template : `<h4 style="color:green; font-weight:normal;text-align:center">Expressions </h4><hr style="color:black">
<pre>
AngularJS expression is like JavaScript expression surrounded 
with braces - {{ expression }}. AngularJS evaluates the specified expression 
and binds the result data to HTML.

AngularJS expression can contain literals, operators and variables like 
JavaScript expression. For example, an expression {{2/2}} will produce the 
result 1 and will be bound to HTML.
<hr> 
&lt;!DOCTYPE html &gt;
&lt;html &gt; 
&lt;head &gt;
&lt;script src="~/Scripts/angular.js" &gt;&lt;/script&gt;
&lt;/head &gt;
 &lt;body &gt;
    &lt;div ng-app&gt;
        2 + 2 = &#123; &#123;2 + 2&#125; &#125;&lt;br &gt;
        2 - 2 = &#123; &#123;2 - 2&#125; &#125; &lt;br &gt;
        2 * 2 = &#123; &#123;2 * 2&#125; &#125; &lt;br &gt;
        2 / 2 = &#123; &#123;2 / 2&#125; &#125;
    &lt;/div &gt;
&lt;/body &gt;
&lt;/html &gt;
<hr>
Result:

<hr>
2 + 2 = 4
2 - 2 = 0
2 * 2 = 4
2 / 2 = 1
<hr>


</pre>
                        
                        `
                    })
                    .when("/Scope",{
                        template : `<h4 style="color:green; font-weight:normal;text-align:center">Scope in Angular</h4><hr style="color:black">
                        
<pre>                        
The $scope in an AngularJS is a built-in object, which contains application 
data and methods. You can create properties to a $scope object inside a 
controller function and assign a value or function to it.

The $scope is glue between a controller and view (HTML). It transfers data 
from the controller to view and vice-versa.
<hr>
        <img src = "ng-scope.png">
        <hr>

As we have seen in the controller section, we can attach properties
and methods to the $scope object inside controller function. 
The view can display $scope data using an expression, ng-model, or 
ng-bind directive, as shown below.

AngularJS creates and injects a different $scope object to each controller 
in an application. So, the data and methods attached to $scope inside one 
controller cannot be accessed in another controller. With the nested controller, 
child controller will inherit the parent controller's scope object. 
Therefore, child controller can access properties added in parent controller 
but parent controller cannot access properties added in child controller.

Note: The ng-model directive is used for two-way data binding. 
It transfers the data from controller to view and vice-versa. 
An expression and ng-bind directive transfers data from controller to view 
but not vice-versa.<hr>
<font color=crymson>$rootScope</font>
An AngularJS application has a single $rootScope. 
All the other $scope objects are child objects.

The properties and methods attached to $rootScope will be available to 
all the controllers.


</pre>                        
                        `
                    })    
                    .when("/Frm",{
                        template : `<h4 style="color:green; font-weight:normal;text-align:center">Form </h4><hr style="color:black">
<pre>
The HTML form is a collection of input controls where user can enter the data. 
Here, you will learn how to display AngularJS form and submit the data.

An AngularJS Form Example
We will create following Student Information form with submit and reset 
functionality.
                    <img src="form.png">
                    
<hr>                    
        The following is a step by step explanation of the above example:                    

1.Create an HTML page and wrap all the necessary input controlls into
form tag.
2.Create the AngularJS application module in the &lt;script$gt; tag.
3.Create studentController in application module.
4.Create originalStudent object and attach to the $scope with required 
properties. This will stay unchanged during entire life cycle.
5.Create new student object and attach to the $scope and copy all the
properties and values from originalStudent. This student object will be 
bound to the form using ng-model directive. Therefore, if user changes form
values then the student object will also get changed.
6.Create submitStudnetForm function which will get called when user submits 
the form using Submit button. Here, send http POST request to the remote 
server to submit the data using $http service.
7.Create resetForm() function, which will reset the form values to the 
originalStudent values by copying it to student object.
8.Apply ng-app, ng-controller directives.
9.Apply ng-model directives to each HTML input element to bind appropriate 
properties of student object.
10..Apply ng-submit directive to form which will call submitStudentForm() on 
the form submit event.
11.Apply ng-click directive to reset button which will call resetForm() on 
the button click event.
An AngularJS form can be submitted using either ng-submit or ng-click 
directive but not both.

12.Ng-submit: Binds angular expression to onsubmit event when form does not 
include action attribute.

13.Ng-click: Binds angular expression to onclick event.

Note : The angular form can be submitted using ng-submit directive on the 
form tag or using ng-click directive on &lt;input type="submit" / &gt; 
element. Use either ng-submit or ng-click directive but not both to submit 
the form. The form will be submitted twice if both ng-submit and ng-click
directives are used.

</pre>`
                    })    
                    .when("/Srv",{
                        template : `<h4 style="color:green; font-weight:normal;text-align:center">Services </h4><hr style="color:black">
<pre>
<font color=red size=4px>AngularJS Service</font>
AngularJS services are JavaScript functions for specific tasks,
which can be reused throughout the application.

tip AngularJS built-in services starts with $, same as other built-in
objects.
AngularJS includes services for different purposes. For example, $http service 
can be used to send an AJAX request to the remote server. AngularJS also allows
you to create custom service for your application.

Most AngularJS services interact with the controller, model or custom 
directives. However, some services interact with view (UI) also
for UI specific tasks.


            <img src=service.png>


            The following table lists all the built-in AngularJS services.
            <hr>
$anchorScroll	$exceptionHandler	$interval	$rootScope
$animate	$filter	$locale	$sceDelegate
$cacheFactory	$httpParamSerializer	$location	$sce
$templateCache	$httpParamSerializerJQLike	$log	$templateRequest
$compile	$http	$parse	$timeout
$controller	$httpBackend	$q	$window
$document	$interpolate	$rootElement	
<hr>
All the Angular services are lazy instantiated and singleton. 
It means AngularJS framework instantiates a service when an application 
component depends on it. Also, all the components share the same 
instance of a service.

            </pre>


`
                    })     
                        .otherwise("/",{
                        template :"<h1 >Nothing </h1><p>Nothing has been selected</p>"
                    });
                }) ;
            