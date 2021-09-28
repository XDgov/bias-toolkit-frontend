---
# _layouts/tool.html layout set by default in _config.yml

# text to show on the card
display-title: Data Generation Notebooks
details: Identifying bias in machine learning models through automatically generated synthetic datasets.

agency-partners:
  - text: U.S. Census Bureau
    href: https://www.census.gov/

github: https://github.com/XDgov/data-generation-notebooks
order: 3
tags:
  - tool

featured: false   # whether or not resource is featured on homepage or /resources. can also be left blank.

---

## Overview
Machine learning (ML) models are complex algorithms that produce outcomes based on what they learn from training data, not by explicit rules set by developers. This opacity of how an outcome was produced can present a major challenge to those trying to identify undesirable model behavior including obscure biases and to identifying how different features influence the fairness of treatment of various subpopulations of a dataset of interest. 

One indicator of potential bias can be when two data observations with the same characteristics are treated differently by a model. Because of the probabilistic nature of some machine learning models, it can be hard to reason when the model is behaving normally and when it is producing a biased output. 

To remedy this, the Data Generation tool offers a suite of Jupyter (Python) notebooks that produce synthetic datasets that enable a user to compare the expected behavior and the actual output of a given ML model. Each notebook linked in the GitHub repository addresses a different use case that may be relevant to your models.

## Usage Instructions

The notebooks give a concrete walkthrough of bias-testing dataset generation, the outputs of model testing, motivation for the code, and examples of use cases. To get started, follow each of the scenarios presented by clicking the GitHub link below and navigating to the application of interest. Because of their modular nature, each notebook can be executed modularly, command-by-command. We recommend, where appropriate, modifying the code presented in the notebooks for one’s own use cases, models, and datasets, as outlined in the notebook itselves. The code can be executed locally, or copied to a different development environment for ease of use. 

For instructions on how to access and use this tool, please see the <a href="https://github.com/XDgov/data-generation-notebooks" target="_blank">Github repository</a>. 

## Learn More
More background and information on the use of synthetic data generation in the context of machine learning can be found <a href="https://dl.acm.org/doi/abs/10.1145/3339252.3339281" target="_blank">here</a>.