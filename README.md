![](./images/devImage.svg)

# Beginners Guide to the Open Source Contribution

Wondering what open source is? <br>
Why should someone contribute to open source?<br>
What are different open-source programs?<br>
How can you contribute?<br>

Don’t worry we will cover all these topics in this article!

# What is open source?

Open-source software (OSS) also referred to as open-source is the publicly available source code of some software. Anyone can access the code, modify it, copy it, learn from it and give feedback.

## There are two types of source codes:

- One is only accessible to a few limited people in the organization who have built the software. And only they can manage and modify the source code.
  They have exclusive control over it. This type of code is called “proprietary” or “closed source software”
- Another is open-source software, which is publicly available for the community to read, modify and learn from it.

As open-source software is publicly accessible, it relies on community feedback and modification. Open-source software is often cheaper, more flexible, and has more longevity than its proprietary peers because it is developed by communities rather than a single author or company. The limitation of proprietary software led to the open-source moment. The open-source model is a decentralized software development model that encourages open collaboration. The main principle of open-source software development is peer production. The contributor can contribute to source code, blueprints, and documentation freely available to the public.

# How to contribute in any Open-Source Project ?

Hi there, let me walk you through on how you can make your first Open-Source Contribution.

## Step 1: Install Github Dekstop

Download Github Dekstop from <a href="https://desktop.github.com/">here</a>. It is the easiest way to get started with Github<br>

---

## Step 2: Click on Open with GitHub Dekstop

To open any project on your local machine, click on open with Github Dekstop. This will clone the repository in your machine.

Click `Open with GitHub Dekstop`

![](./images/contributionSteps/step2.png) <br>
![](./images/contributionSteps/step3.png)

---

## Step 3: Creating a new Branch

After cloning, the default branch is set to main. In order to make a pull request, we can create another branch. It resembles the main branch and the changes we make here can later on be merged with the main branch.

Click `New branch`

![](./images/contributionSteps/step4.png)

---

## Step 4: Make your changes in the new branch and Commit them

To add your changes go to the following directory :

1. Open any code editor and open the folder in which you have cloned the repository.

2. Open `src/data.js`

You must be seeing something like this -

  ```js
  const contributions = [
      {
          id : 1,
          name : "Shantanu Mane",
          about: "Student | Athlete",
          bio : "I'd say I'm an engineer, but that's probably an overstatement...",
          userNameGitHub: "RndmCodeGuy20",
          userNameInsta: "shantheman.20",
          songName: "Mystery Of Love",
          singerName: "Sufjan Stevens",
          songCover: "https://i.ytimg.com/vi/QqgDXRJvTZQ/maxresdefault.jpg"
      },
      {
          id : 2,
          name : "Pratik Agrawal",
          about: "AIML | Robotics | IoT",
          bio : "Want to work in the field of defence technology...",
          userNameGitHub: "RudraPratik20",
          userNameInsta: "-",
          songName: "All I Want",
          singerName: "Kodaline",
          songCover: "https://i.scdn.co/image/ab67616d0000b2733e42854096da9a3b1ca901c9"
      }
  ]
  
  export default contributions;
  ```

continue the list by adding another `{}` and fill all the necessary parameters and also give `id` appropriate value, ie., one more than the previous one.

⚠️⚠️⚠️ To make the page render properly do not miss any field in the file.

3. In the `songName and singerName` add the song name and the singer's name of you favorite song, and in the `songCover` add link of the album cover's image (just google it 😂).


Now that you've made your changes you are good to commit your changes!
Commiting your changes means saving the changes your made and keeping them ready before publishing.

Head onto the github desktop app to commit your changes.

![](./images/contributionSteps/step5.png)

If it asks to fork the repository, then do it.

---

## Step 5: Publishing, Pushing and Starting a Pull Request

Now can publish your branch if not done and push it. This will make copy and store the branch on the github site.

![](./images/contributionSteps/step8.png)

Now you can start the pull request by clicking `Create pull request`

![](./images/contributionSteps/step6.png)

---

## Step 6: Make the Pull Request

Now you can fill details about the pull request you are making and submit it.

Add meaningful request message denoting your changes and then click `Create pull request`

![](./images/contributionSteps/createPull.jpeg)


---
![](./images/contributionSteps/step7.png)

with this you have successfully made your first contribution in an Open-Source projects!!!