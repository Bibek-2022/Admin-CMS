# E-Commerce Admin CMS

This is a project is build for admin to create and manage their e-commerce store.

This is the api/server part and the UI is available at repo ``

## How to use

1. run `git clone <url>`
2. run `npm i`
3. run `cd <folder name>`
4. run `npm run dev` for the local development. Note that you must have nodemon installed on your system. To install `npm i nodemon -g`

## APIS

All our api url follow the following patterns: {rootUrl}/api/v1

## Admin registration and login api

This section show you how you can access the api for admin registration and login.

Note: TODO: make sure the admin registration api is protected after first admin is create because only admin can add another admin user.

All registration and login api follow the following patterns {rootUrl}/api/v1/register-login

# PATH METHOD IS PRIVATE DESCRIPTION

1. / POST Yes Send user data, fName, lName.... to care new admin user in the database

## Admin user api

    Register and login api are private.

    /api/v1/register-login/register -> This is the register api and the entry point to register a new admin user.

    /api/v1/register-login/login -> This is the login api and the entry point to login a admin user.

    /api/v1/register-login/logout -> This is the logout api and the entry point to logout a admin user.
    
    
 ## Payment Method
    Payment Method api are private
    
    /api/v1/payment-method -> This endpoint can be used for POST,GET, DELTE and PATCH request.
    
 ## Admin Profile
    Admin Profile api are private
    
     /api/v1/register-login/password -> This is the endpoint for to update the password for a logged in admin user.
     /api/v1/register-login/admin -> This is the endpoint for to update the details for the admin profile.
    

   
