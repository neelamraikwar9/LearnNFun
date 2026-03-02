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

- Displayed Information of the platform.
- Testimonial of community members.
- FAQs
- Join button to register in the community.


 **About**

 - About the community initiator with screenshots of community seassions.

 **Schedule** 

 - Displayed Schedule of the seassions.

 ---

## API Refrence

 ### GET /[api/testimonials](lnf-backend.vercel.app/)<br/>

 List  of all Testimonialss <br/>  

 Sample Response: <br/>
 
 ```

[{ _id, name, source, salesAgent, status, tags}, ...] 


 ```


 ### GET /[api/salesAgent](https://anvaya-model-references-apis-backen.vercel.app/salesAgent)<br/>

