# Learn N Fun

This is a full-stack web application for the LNF community that enables learners to join the community by submitting a registration form.

Built with, React Frontend, Express/Node Backend and MongoDB Database.


--- 


## Demo Link

[Live Demo](https://learn-n-fun-nine.vercel.app/)


---


## Quick Start


```

git clone https://github.com/neelamraikwar9/LearnNFun.git
cd<LearnNFun>
npm install
npm run dev

```


---


## Technologies

- React 
- React Router
- Node JS
- Express
- MongoDB
- axios
- react-toastify
- Bootstrap Icons


---


## Features

**Home**

- Displayed Information about the platform.
- Testimonial of community members.
- FAQs
- Join button to register in the community.


 **About**

 - About the community initiator with screenshots of community seassions.

 **Schedule** 

 - Displayed schedule of the seassions.

 ---

## API Refrence

 ### GET /[api/testimonials](https://lnf-backend.vercel.app/testimonials)<br/>

 List  of all Testimonials <br/>  


 Sample Response: <br/>
 
 ```

[{ _id, name, testimonial}] 


 ```


 ### GET /[api/activities](https://lnf-backend.vercel.app/activities)<br/>

 List  of all Activities <br/>  


 Sample Response: <br/>
 
 ```

[{ _id, weekDay, activityName, activityDescription}] 


 ```


 ### POST /[api/forms](https://lnf-backend.vercel.app/forms)<br/>

 Register the Learner <br/>  


 Sample Response: <br/>
 
 ```

[{ _id, name, email, city, contactNumber, occupation, purpose, duration}] 


 ```


--- 


## Contact
 
 For bugs or feature request, please reach out to, 
 Email:- neelam.raikwar.234303@gmail.com
 Linkedin:- https://www.linkedin.com/in/neelam-raikwar-204614250/

