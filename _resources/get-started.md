---

# text to show on the card
display-title: Get Started  
details: Start here for an overview of bias and an introduction to major concepts.

# whether or not the card is "featured" on the /resources page or homepage
featured: true
order: 1

# pills above the title on the card
tags:
  - Primer

---

### Overview
Bias is the systematic inaccuracies found in data. Bias can arise in every step of the decision-making process--for data driven decisions, the process by which you collect and treat data may introduce bias. The decision-making frameworks themselves, often driven by artificial intelligence or machine learning algorithms, can also be constructed in a way that introduces bias. The effects of bias can take many forms;  a group that is being biased against may be less likely to receive resources that it otherwise should be allocated--think jobs, government benefits, and housing, among other things. 

This toolkit is designed to help you identify, understand, and mitigate potential sources of bias in your data, algorithms, and processes. This toolkit is targeted towards practitioners and managers with intermediate knowledge of data collection and AI/ML algorithms. The resources featured here are relevant to both technical teams and teams whose mission could be impacted by certain tools, i.e. hiring managers seeking to reduce bias in their job applicant pools.

Below is a list of introductory terms that are related to bias found in artificial intelligence (AI) and machine learning (ML) applications.


### Key Terms
<strong>Artificial intelligence:</strong> A system composed of an algorithm or model that solves complex tasks, including those in the vision, language, and learning domains.

<strong>Machine Learning:</strong> Sometimes colloquially used interchangeably with artificial intelligence, machine learning describes a series of methods and systems in which "learns" from input data to predict outcomes and draw inferences from new data it has never seen drawn from a similar distribution as the training data. For example, we can train a predictive model on job and college admission outcomes from last year's cohort of US high school students to try to predict what this year's cohort of US high school seniors will achieve.

The main categories of machine learning tasks are prediction, detection, and description, causal inference, and detection. Detection is the identification of new, unusual types of events, data points, patterns, a set of techniques that might help Census identify dataset outliers that represent bad data collection practices, or fraudulent survey responses. Causal inference describes a series of methods that capture the relationship between data and outcomes, such as when one determines whether switching to an online survey causes certain classes of businesses to not respond to surveys. This resource will focus on prediction and description, which have the most relevance to Census, and civic good settings more broadly.

<strong>Prediction with Machine Learning:</strong> Prediction involves determining the value of some element of a dataset that is not already know. For instance, given the demographic growth history across 49 states, what do we think will be the demographic growth over the next year across the 50th state for which we have no data?
Description with Machine Learning: Description tasks analyze properties of a dataset. An example of a descriptive task is summarizing text data, or clustering, which seeks to move unlabeled data we have not classified in any way into groupings ("clusters") of data that bear meaningful similarities.
Natural Language Processing: An example common NLP task is sentiment analysis of user comments in a post-service survey to gauge user satisfaction with government services. Natural language processing is a branch of artificial intelligence, distinct from machine learning, describing a series of methods that enable the analysis, interpretation, and manipulation of various aspects of written and spoken human language. A closely-linked term is Natural Language Generation, which refers to the field encompassing various computer-based methods used to generate "human" language.

<strong>Model Accuracy:</strong> Percentage of correct predictions to predictions made overall by a classifier model. There are various accuracy metrics that can be used, usually as some combination of proportions of true and false negatives and positives. One common way of representing a model's accuracy in classification tasks is a confusion matrix -- essentially a table of false positives and negatives .

<strong>Deep Learning:</strong> An artificial intelligence model that relies on multiple layers of neural networks -- collections of nodes modeled on neurons in the human brain -- each of which transforms the input data in progressively more abstract ways. Examples of deep learning networks are RNNs, or recurrent neural nets, used in language applications, and CNNs, or convolutional neural nets, which are used most commonly in computer vision applications. Deep learning's utility lies in the fact that these models automatically detect features, so that the user does not have to create or engineer them.
Model Training: Training is the process of developing a model by exposing it to labeled examples (training data) in order for it to “learn” how the features relate to the labels.

<strong>Model Deployment:</strong> One of the last steps of the ML development process. Deploying your model means putting it into a production environment, such that it can be accessed by others (for example, through an API) and begins making decisions/predictions using "real" data post-training and testing. Models still require testing and maintenance and possible retraining post-deployment.

<strong>Features:</strong> Input to an AI/ML model. For instance, features a model build to predict economic mobility of a population could include educational attainment and work history. The process of extracting features from data, which could include complex processing, is known as feature engineering. Features can be categorical (a set of occupations) or continuous (income), and could also be images, such as in computer vision.

<strong>Labels:</strong> What a model is trying to predict; model output.