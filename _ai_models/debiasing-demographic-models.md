---
display-title: Bias in Demographic Models
description: Employing explainable AI (XAI) to evaluate fairness and accountability in AI/ML models.
layout: default
tags:
  - classification
last-update: 2023-11-15
---

<h1>{{ page.display-title }}</h1>

<p>
Artificial Intelligence (AI) and Machine Learning (ML) have made tremendous advancements in recent decades. AI/ML models have been used in demographic research to gain insights for specific populations and research focuses. While these advanced models are certainly capable of providing novel and in-depth analysis, challenges related to bias and fairness remain a major issue. To address this issue of bias identification and mitigation, AI/ML models must be designed with fairness and trustworthiness as a core component of the model. Towards the fairness and trustworthiness of AI/ML models, explainable AI (XAI) has garnered interest in filling the gaps where traditional AI/ML models fall short. Explainability plays a central role in ensuring the fairness and trustworthiness of AI/ML models. In this project, we highlight the use of XAI to identify bias within AI/ML models and the datasets used for these models.
</p>

<h2>Detailed Information</h2>

<div class="display-flex flex-row flex-align-stretch margin-top-5">
  <i class="iconoir-open-book model-card-icon" aria-hidden="true" focusable="false"></i>
  <h3 class="margin-0">Overview</h3>
</div>
<ul>
  <li><span class="text-bold text-underline">Model name</span>: Language-Income Classification</li>
  <li><span class="text-bold text-underline">Model author(s) and affiliations </span>(inquiries can be sent to <a href="mailto:inquiries@xd.gov">inquiries@xd.gov</a>):
    <ul>
      <li>Atul Rawal, Ph.D (xD - Office of Deputy Director)</li>
      <li>Sandy L Dietrich, Ph.D (Social, Economic, and Housing Statistics Division)</li>
      <li>James McCoy (xD - Office of Deputy Director)</li>
    </ul>
  </li>
  <li><span class="text-bold text-underline">Model acquisition/development method</span>: Internally built by Atul Rawal, Sandy L Dietrich & James McCoy</li>
</ul>
<div class="display-flex flex-row flex-align-stretch margin-top-5">
  <i class="iconoir-code-brackets-square model-card-icon" aria-hidden="true" focusable="false"></i>
  <h3 class="margin-0">Anticipated Use</h3>
</div>
<ul>
  <li><span class="text-bold text-underline">Division(s)using the model</span>: xD & SEHSD</li>
  <li><span class="text-bold text-underline">Intended application(s) and stakeholder(s) of the model</span>: Research studies for language equity in the US by xD & SEHSD</li>
</ul>
<div class="display-flex flex-row flex-align-stretch margin-top-5">
  <i class="iconoir-database-script model-card-icon" aria-hidden="true" focusable="false"></i>
  <h3 class="margin-0">Model information</h3>
</div>
<ul>
  <li><span class="text-bold text-underline">Current model version and release date</span>: V1, released on 11/3/2023</li>
  <li><span class="text-bold text-underline">Changes made since the last release. (If any)</span>: N/A</li>
  <li><span class="text-bold text-underline">License for use</span>: N/A </li>
  <li><span class="text-bold text-underline">Type of model (Classification or Regression)</span>: Classification</li>
</ul>
<div class="display-flex flex-row flex-align-stretch margin-top-5">
  <i class="iconoir-network-right model-card-icon" aria-hidden="true" focusable="false"></i>
  <h3 class="margin-0">Model Architecture</h3>
</div>
<ul>
  <li><span class="text-bold text-underline">Type of algorithm used</span>: Multiple ( RF, LR, GBR, LGBM, XGB, CatBoost & CNN)</li>
</ul>
<div class="display-flex flex-row flex-align-stretch margin-top-5">
  <i class="iconoir-database model-card-icon" aria-hidden="true" focusable="false"></i>
  <h3 class="margin-0">Datasets</h3>
</div>
<ul>
  <li><span class="text-bold text-underline">Source(s) of the training data</span>: IPUMS data repository for ACS data</li>
  <li><span class="text-bold text-underline">Data collection/ generation method</span>: Data downloaded form IPUMS for 2015 - 2019 period</li>
  <li><span class="text-bold text-underline">Number of variables in this dataset</span>: 16</li>
  <li><span class="text-bold text-underline">Number of entries in your dataset</span>: 500,000</li>
  <li><span class="text-bold text-underline">Percent of data chosen as a training, testing and validation set</span>: 80% training & 20% testing</li>
</ul>
<div class="display-flex flex-row flex-align-stretch margin-top-5">
  <i class="iconoir-graph-up model-card-icon" aria-hidden="true" focusable="false"></i>
  <h3 class="margin-0">Performance Metrics</h3>
</div>
<ul>
  <li><span class="text-bold text-underline">Metrics used to rate model performance</span>:
    <ul>
      <li>Accuracy</li>
      <li>precision</li>
      <li>recall</li>
      <li>F1-score</li>
    </ul>
  </li>
  <li><span class="text-bold text-underline">Factors that limit the model's performance (Example: Limited dataset, Number of Nulls/NAs) (If any)</span>: N/A</li>
</ul>
<div class="display-flex flex-row flex-align-stretch margin-top-5">
  <i class="iconoir-community model-card-icon" aria-hidden="true" focusable="false"></i>
  <h3 class="margin-0">Bias</h3>
</div>
<ul>
  <li><span class="text-bold text-underline">Inclusion of information related to individuals or human populations in the training/testing/validation dataset</span>: Yes, sensitive attributes such as age, sex, race and ethnicity</li>
  <li><span class="text-bold text-underline">Degree of risk of human judgement injecting bias within the workflow</span>: N/A</li>
  <li><span class="text-bold text-underline">Methods used to minimize bias from human judgement</span>: N/A</li>
  <li><span class="text-bold text-underline">Potential biases found in the training dataset from collection methods, sample size, representation, etc.</span>: Bias in sample distribution</li>
  <li><span class="text-bold text-underline">Testing/evaluation performed to look for bias in the workflow of the model</span>: Equal distribution of the languages spoken at home</li>
  <li><span class="text-bold text-underline">Degree of model explainability/transparency</span>: Post-hoc explainability via SHAP</li>
</ul>
<div class="display-flex flex-row flex-align-stretch margin-top-5">
  <i class="iconoir-clipboard-check model-card-icon" aria-hidden="true" focusable="false"></i>
  <h3 class="margin-0">Governance & Compliance</h3>
</div>
<ul>
  <li><span class="text-bold text-underline">Model/dataset compliance with existing laws and regulations (Including privacy protection regulations)</span>: Yes, compliance with both Title 13 & 26 regulations</li>
</ul>
