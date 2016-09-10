[![Stories in Ready](https://badge.waffle.io/nikau-2016/lifestack.png?label=ready&title=Ready)](https://waffle.io/nikau-2016/lifestack)
# Lifestack

Final project - Nikau 2016

# *Git Process* (Nikau-2016-Final-Project)

1.Ensure that you are branching off of the Development (dev) branch at all times.

2. To start a new feature, first switch to the DEV branch.

3. Then use 'git pull origin Development(dev)' to make sure you are up to date on all the current changes.

4. Use 'git checkout -b 'Branch-name-here' ' to create a feature branch.

5. Please only make commits after you have completed a section of your feature that works, and name your commits appropriately.

6. When your feature branch has all required functionality working, make one final commit in the format of 'Feature-Name' is Finished'.

7. Switch back to Development(dev), and make your PR as defined below.

8. Repeat steps 2 - 6.

Please refer to Kamon for any questions about this process.

# *Pull Request Process* (Nikau-2016-Final-Project)

(Ensure that you have adhered to the git process prior to making each pull request)

# Making A Pull Request
1.Ensure that you've opened a pull request to the 'DEVELOPMENT' branch from your feature branch.

2. Use the '#<n>' format to reference the ticket that the pull request is meant to complete.

3. Make detailed comments explaining the purpose of the pull request.

4. Alert another team member that a pull request has been made and is awaiting review.

# Reviewing A Pull Request
1. Ensure that the changes proposed in the pull request meet the requirements of the associated ticket.

2. Ensure that the request is being made to the development branch.

3. !IMPORTANT! Leave a comment detailing any further changes that need to be made for the pull request.

4. Accept and close the Pull Request once the proposed changes meet all requirements of  the associated tickets and any comments.

5. Please move the associated ticket into the done column of the waffle board upon merging the pull request.


!IMPORTANT!
  Do not merge the pull request yourself!
  Ensure that someone outside of your pair reviews your code!
  HAVE FUN! :D
!IMPORTANT!

# *Formatting and conventions* (Nikau-2016-Final-Project)

1. When creating a Redux component, please name the file with a capital letter for the beginning of each word. For example, your components names would look like

 "SearchPage.jsx"

 not

 "searchPage.jsx"

 "Search-Page.jsx"

 "searchpage.jsx"

 Also, when choosing the className for these components, please name them as such, with the word/words lowercase, and seperated with a dash -

 div className="search-page"

 not

 div className="SearchPage"

 div className="Search-Page"

 div className="search-Page"

Adhering to these conventions will help alleviate confusion amongst the team

##Server Routes 


##Heroku Server##

The server is currently running on the domain ```Enter URL here```

##Routes - Skills

###GET : /v1/skills.js ###

Sends back all questions currently in the database in JSON 

Response body:

```
{
      id: 1237,
      link: "https://www.youtube.com/watch?v=jpIX1_qQni8",
      skillName: "Change Lightbulb"
    },
    {
      id: 1238,
      link: "https://www.youtube.com/watch?v=KBtkup2PWAU",
      skillName: "How to Write a cheque"
    },
    {
      id: 1239,
      link: "https://www.youtube.com/watch?v=aaqzPMOd_1g",
      skillName: "How to Grow Herbs"
    },
```
