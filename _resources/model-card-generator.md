---
display-title: Model Card Generator
details: Acknowledging bias through transparency.

agency-partners:
  - text: U.S. Census Bureau
    href: https://www.census.gov/

github: https://github.com/XDgov/model-card-generator
tags:
  - tool
---
## Overview
A model card is a documentation tool to increase transparency and share information with a wider audience by sharing information about a model’s intent, data, architecture, and performance. These brief documents are intended for a technical and non-technical audience to gain insight on a machine learning, AI, or automation model at any phase in development. 

The cards work to reduce bias in a user’s workflow by guiding them through a series of questions that illuminate steps frequently considered but not documented. The user is asked to describe topics such as: the use cases of the model, the structure of the data, and the evaluation tools used in development. The model card generator aims to reduce bias in government machine learning workflows by exploring a model’s ability to perform across sensitive classes and by collecting this information in a readable format to a wider audience. Accessible documentation increases accountability and visibility of the models making decisions in government.

Once a model card has been created, there are several uses of the document. The cards generated in this tool are formatted to be added to a repository with the model. When accessed, a new user could reference this document for detailed information to guide their own use of the model. A model card could be shared with non-technical stakeholders for full transparency of performance and expectations.


## Usage Instructions
The model card generator is a command line tool run from a python script developed using Python 3.8.8 and is compatible with a minimum version of Python 3.2. Once the python script has been run, the user can choose to submit answers as responses inline or as a word document. Further information regarding the usage of the tool can be found in the repository.

For instructions on how to access and use this tool, please see the <a href="https://github.com/USDepartmentofLabor/ableist-language-detector" target="_blank">Github repository</a>. 

## Learn more

More background and information on model cards can be found in <a href="https://arxiv.org/abs/1810.03993" target="_blank"><i>Model Cards for Model Reporting</i> (2018)</a>