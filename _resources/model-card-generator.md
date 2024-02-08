---
display-title: Model Card Generator
details: Acknowledging bias through transparency.

agency-partners:
  - text: U.S. Census Bureau
    href: https://www.census.gov/

github: https://github.com/XDgov/model-card-generator
order: 3
tags:
  - tool
---
<p>
  A model card is a documentation tool to increase transparency and share information with a wider audience by sharing information about a model’s intent, data, architecture, and performance. Model cards are intended for a technical and non-technical audience to gain insight on a machine learning, AI, or automation model at any phase in development.
</p>
<a class="usa-button" href="{{ site.baseurl }}/resources/model-card-generator/tool">
  Create a Model Card
</a>
<p class="font-sans-2xs">
  or use our <a href="{{ page.github }}">command line tool</a> to generate a model card locally.
</p>
<h3>Additional Background Information</h3>

<p>
  Model cards work to reduce bias in a user’s workflow by guiding them through a series of questions that illuminate steps frequently considered but not documented. The user is asked to describe topics such as: the use cases of the model, the structure of the data, and the evaluation tools used in development. The model card generator aims to reduce bias in government machine learning workflows by exploring a model’s ability to perform across sensitive classes and by collecting this information in a readable format to a wider audience. Accessible documentation increases accountability and visibility of the models making decisions in government.
</p>
<p>
  Once a model card has been created, there are several uses of the document. The cards generated in this tool are formatted to be added to a repository with the model. When accessed, a new user could reference this document for detailed information to guide their own use of the model. A model card could be shared with non-technical stakeholders for full transparency of performance and expectations.
</p>
