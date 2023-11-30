---
display-title: Bias in Demographic Models
description: Employing explainable AI (XAI) to evaluate fairness and accountability in AI/ML models.
layout: default
---

<h1>{{ page.display-title }}</h1>

<p>
Artificial Intelligence (AI) and Machine Learning (ML) have made tremendous advancements in recent decades. AI/ML models have been used in demographic research to gain insights for specific populations and research focuses. While these advanced models are certainly capable of providing novel and in-depth analysis, challenges related to bias and fairness remain a major issue. To address this issue of bias identification and mitigation, AI/ML models must be designed with fairness and trustworthiness as a core component of the model. Towards the fairness and trustworthiness of AI/ML models, explainable AI (XAI) has garnered interest in filling the gaps where traditional AI/ML models fall short. Explainability plays a central role in ensuring the fairness and trustworthiness of AI/ML models. In this project, we highlight the use of XAI to identify bias within AI/ML models and the datasets used for these models.
</p>

<h2>Detailed Information</h2>

<h3>Accountability</h3>
<ul>
  <li>Model name : Language-Income Classification</li>
  <li>Point of contact(s) and affiliations : Atul Rawal, Ph.D (xD) ; Sandy L Dietrich, Ph.D (SEHSD) ; James McCoy (CDO) </li>
  <li>Model acquisition/development method : Internally built by Atul Rawal, Sandy L Dietrich & James McCoy</li>
</ul>
<h3>Anticipated Use</h3>
<ul>
  <li>Division(s)using the model : xD & SEHSD</li>
  <li>Intended application(s) and stakeholder(s) of the model : Research studies for language equity in the US by xD & SEHSD</li>
</ul>
<h3>Model Information & Architecture</h3>
<ul>
  <li>Current model version and release date : V1, released on 11/3/2023</li>
  <li>Changes made since the last release. (If any) : N/A</li>
  <li>License for use : N/A </li>
  <li>Type of model (Classification or Regression) : Classification</li>
  <li>Type of algorithm used : Multiple ( RF, LR, GBR, LGBM, XGB, CatBoost & CNN)</li>
</ul>
<h3>Data & Performance</h3>
<ul>
  <li>Source(s) of the training data : IPUMS data repository for ACS data</li>
  <li>Data collection/ generation method : Data downloaded form IPUMS for 2015 - 2019 period</li>
  <li>Number of variables in this dataset : 16</li>
  <li>Number of entries in your dataset : 500,000</li>
  <li>Percent of data chosen as a training, testing and validation set : 80% training & 20% testing</li>
  <li>Metrics used to rate model performance: Accuracy, precision, recall & F1-score</li>
  <li>Factors that limit the model's performance (Example: Limited dataset, Number of Nulls/NAs) (If any)  : N/A</li>
</ul>
<h3>Bias Identification & Mitigation</h3>
<ul>
  <li>Inclusion of information related to individuals or human populations in the training/testing/validation dataset : Yes, sensitive attributes such as age, sex, race and ethnicity</li>
  <li>Degree of risk of human judgement injecting bias within the workflow : N/A</li>
  <li>Methods used to minimize bias from human judgement : N/A</li>
  <li>Potential biases found in the training dataset from collection methods, sample size, representation, etc. : Bias in sample distribution</li>
  <li>Testing/evaluation performed to look for bias in the workflow of the model : Equal distribution of the languages spoken at home</li>
  <li>Degree of model explainability/transparency : Post-hoc explainability via SHAP</li>
</ul>
<h3>Governance & Compliance</h3>
<ul>
  <li>Model/dataset compliance with existing laws and regulations (Including privacy protection regulations) : Yes, compliance with both Title 13 & 26 regulations</li>
</ul>
