---
layout: tool
display-title: Model Card Generator
details: Acknowledging bias through transparency.

permalink: /resources/model-card-generator/tool/
resource:
  name: Model Card Generator
  url: /resources/model-card-generator/
tags:
  - Tool
version: 0.1
---
<p>
	This tool can be used to create a <a href="{{ page.resource.url }}">Model Card</a>: a way to share information about a model’s intent, data, architecture, and performance. Use the form below to generate a markdown (*.md) file version of a model card.
</p>

<form accept-charset="UTF-8" enctype="multipart/form-data" class="usa-form model-card-form" id="model-card-form">
  <h3>Overview</h3>
  <div>
    <label class="usa-label" for="name">What is your model name?</label>
    <input class="usa-input" type="text" id="name" data-md-title="ModelName" data-md-type="h1">
  </div>
  <div>
    <label class="usa-label" for="owners">
      Enter names of model owners in a "+" separated list. 
      <span class="usa-label-helper">Example: Jane Doe, Ph.D. + John Smith</span>
    </label>
    <input class="usa-input" type="text" id="owners" data-md-title="Collaborators" data-md-type="ul">
  </div>
  <div>
    <label class="usa-label" for="agencies">Enter affiliated agencies in a + seperated list. Example: xD + Census</label>
    <input class="usa-input" type="text" id="agencies" data-md-title="Agency" data-md-type="ul">
  </div>
  <div>
    <label class="usa-label" for="acquisition">
      How was the model acquired?
    </label>
    <select name="acquisition" class="usa-select">
      <option value>- Select -</option>
      <option value="internally-built">Internally-built</option>
      <option value="internally-built">Off-the-shelf</option>
      <option value="internally-built">Bespoke</option>
    </select>
  </div>
  <h3>Anticipated Use</h3>
  <div>
    <label class="usa-label" for="user-agencies" id="user-agencies-label">
      In which agencies will this model be used?
    </label>
    <input class="usa-input" type="text" id="user-agencies" data-md-title="label" data-md-type="ul" data-md-heading="Anticipated Use">
  </div>
  <div>
    <label class="usa-label" for="user-individuals" id="user-individuals-label">
      Who are the intended users of the model?
    </label>
    <input class="usa-input" type="text" id="user-individuals" data-md-title="label" data-md-type="ul">
  </div>
  <div>
    <label class="usa-label" for="use-cases" id="use-cases-label">
      What are the intended use cases of the model?
    </label>
    <input class="usa-input" type="text" id="use-cases" data-md-title="label" data-md-type="ul">
  </div>
  <h3>Model Information</h3>
  <div>
    <label class="usa-label" for="model-version" id="model-version-label">
      What is the current model version?
    </label>
    <input class="usa-input" type="text" id="model-version" data-md-title="label" data-md-type="ul" data-md-heading="Model Information">
  </div>
  <div>
    <label class="usa-label" for="release-date" id="release-date-label">
      What is the version release date?
    </label>
    <input class="usa-input" type="text" id="release-date" data-md-title="label" data-md-type="ul">
  </div>
  <div>
    <label class="usa-label" for="changes" id="changes-label">
      What changes have been made since the last release?
    </label>
    <input class="usa-input" type="text" id="changes" data-md-title="label" data-md-type="ul">
  </div>
  <div>
    <label class="usa-label" for="license" id="license-label">
      What is the license for use?
    </label>
    <input class="usa-input" type="text" id="license" data-md-title="label" data-md-type="ul">
  </div>
  <h3>Model Architecture</h3>
  <div>
    <label class="usa-label" for="algorithm" id="algorithm-label">
      What type of algorithm is used?
    </label>
    <input class="usa-input" type="text" id="algorithm" data-md-title="label" data-md-type="ul" data-md-heading="Model Architecture">
  </div>
  <div>
    <label class="usa-label" for="input-format" id="input-format-label">
      How is the input data formatted?
    </label>
    <input class="usa-input" type="text" id="input-format" data-md-title="label" data-md-type="ul">
  </div>
  <div>
    <label class="usa-label" for="output-format" id="output-format-label">
      How is the output data formatted?
    </label>
    <input class="usa-input" type="text" id="output-format" data-md-title="label" data-md-type="ul">
  </div>
  <h3>Datasets</h3>
  <div>
    <label class="usa-label" for="training-data-pii" id="training-data-pii-label">
      Does the training dataset contain information related to individuals or human populations?
    </label>
    <input class="usa-input" type="text" id="training-data-pii" data-md-title="label" data-md-type="ul" data-md-heading="Datasets">
  </div>
  <div>
    <label class="usa-label" for="data-source" id="data-source-label">
      What is the source(s) of the training data?
    </label>
    <input class="usa-input" type="text" id="data-source" data-md-title="label" data-md-type="ul">
  </div>
  <div>
    <label class="usa-label" for="data-collection" id="data-collection-label">
      How was this data collected or generated?
    </label>
    <input class="usa-input" type="text" id="data-collection" data-md-title="label" data-md-type="ul">
  </div>
  <div>
    <label class="usa-label" for="data-variables" id="data-variables-label">
      What variables are contained in this dataset?
    </label>
    <input class="usa-input" type="text" id="data-variables" data-md-title="label" data-md-type="ul">
  </div>
  <div>
    <label class="usa-label" for="entry-count" id="entry-count-label">
      How many entries are contained in your dataset?
    </label>
    <input class="usa-input" type="text" id="entry-count" data-md-title="label" data-md-type="ul">
  </div>
  <div>
    <label class="usa-label" for="validation-percent" id="validation-percent-label">
      What percent of data is chosen as a validation set?
    </label>
    <input class="usa-input" type="text" id="validation-percent" data-md-title="label" data-md-type="ul">
  </div>
  <h3>Performance Metrics</h3>
  <div>
    <label class="usa-label" for="metrics" id="metrics-label">
      What metrics are used to rate model performance?
    </label>
    <input class="usa-input" type="text" id="metrics" data-md-title="label" data-md-type="ul" data-md-heading="Performance Metrics">
  </div>
  <div>
    <label class="usa-label" for="metric-reporting" id="metric-reporting-label">
      How are the metrics being reported?
    </label>
    <input class="usa-input" type="text" id="metric-reporting" data-md-title="label" data-md-type="ul">
  </div>
  <div>
    <label class="usa-label" for="confidence-interval" id="confidence-interval-label">
      What is the confidence interval of these metrics?
    </label>
    <input class="usa-input" type="text" id="confidence-interval" data-md-title="label" data-md-type="ul">
  </div>
  <div>
    <label class="usa-label" for="decision-threshold" id="decision-threshold-label">
      What decision threshold was used to compute the metric?
    </label>
    <input class="usa-input" type="text" id="decision-threshold" data-md-title="label" data-md-type="ul">
  </div>
  <div>
    <label class="usa-label" for="performance-limit" id="performance-limit-label">
      What factors limit the model's performance?
    </label>
    <input class="usa-input" type="text" id="performance-limit" data-md-title="label" data-md-type="ul">
  </div>
  <h3 data-md-title="Bias" data-md-type="h2">Bias</h3>
  <div>
    <label class="usa-label" for="human-bias" id="human-bias-label">
      Does the training dataset contain information related to individuals or human populations?
    </label>
    <input class="usa-input" type="text" id="human-bias" data-md-title="label" data-md-type="ul" data-md-heading="Bias">
  </div>
  <div>
    <label class="usa-label" for="human-judgement" id="human-judgement-label">
      Within the workflow of this model, is there risk of human judgement injecting bias?
    </label>
    <input class="usa-input" type="text" id="human-judgement" data-md-title="label" data-md-type="ul">
  </div>
  <div>
    <label class="usa-label" for="minimize-bias" id="minimize-bias-label">
      What methods are used to minimize bias from human judgement?
    </label>
    <input class="usa-input" type="text" id="minimize-bias" data-md-title="label" data-md-type="ul">
  </div>
  <div>
    <label class="usa-label" for="minimize-bias-methods" id="minimize-bias-methods-label">
      What biases are potentially found in the training dataset from collection methods, sample size, representation, etc.?
    </label>
    <input class="usa-input" type="text" id="minimize-bias-methods" data-md-title="label" data-md-type="ul">
  </div>
  <div>
    <label class="usa-label" for="bias-eval-tools" id="bias-eval-tools-label">
      What evaluation tools have been used to evaluate bias in the training dataset?
    </label>
    <input class="usa-input" type="text" id="bias-eval-tools" data-md-title="label" data-md-type="ul">
  </div>
  <div>
    <label class="usa-label" for="bias-addressed" id="bias-addressed-label">
      How and when are biases in the dataset addressed in the workflow of the model?
    </label>
    <input class="usa-input" type="text" id="bias-addressed" data-md-title="label" data-md-type="ul">
  </div>
  <div>
    <label class="usa-label" for="bias-testing" id="bias-testing-label">
      What testing has been performed to look for bias in the model?
    </label>
    <input class="usa-input" type="text" id="bias-testing" data-md-title="label" data-md-type="ul">
  </div>
  <div>
    <label class="usa-label" for="bias-dev-time" id="bias-dev-time-label">
      What percentage of development time has been dedicated to bias mitigation?
    </label>
    <input class="usa-input" type="text" id="bias-dev-time" data-md-title="label" data-md-type="ul">
  </div>
</form>
<button type="submit" form="model-card-form" id="form-btn" class="usa-button">Create Model Card Markdown File</button>

{% include model-card-js.html %}
