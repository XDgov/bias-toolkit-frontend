---
display-title: Model Card Generator
details: Acknowledging bias through transparency.

agency-partners:
  - text: U.S. Census Bureau
    href: https://www.census.gov/

github: https://github.com/XDgov/model-card-generator
order: 2
tags:
  - tool
---
### Overview
A model card is a documentation tool to increase transparency and share information with a wider audience by sharing information about a model’s intent, data, architecture, and performance. These brief documents are intended for a technical and non-technical audience to gain insight on a machine learning, AI, or automation model at any phase in development.

The cards work to reduce bias in a user’s workflow by guiding them through a series of questions that illuminate steps frequently considered but not documented. The user is asked to describe topics such as: the use cases of the model, the structure of the data, and the evaluation tools used in development. The model card generator aims to reduce bias in government machine learning workflows by exploring a model’s ability to perform across sensitive classes and by collecting this information in a readable format to a wider audience. Accessible documentation increases accountability and visibility of the models making decisions in government.

Once a model card has been created, there are several uses of the document. The cards generated in this tool are formatted to be added to a repository with the model. When accessed, a new user could reference this document for detailed information to guide their own use of the model. A model card could be shared with non-technical stakeholders for full transparency of performance and expectations.


### Usage Instructions
The model card generator is a command line tool run from a python script developed using Python 3.8.8 and is compatible with a minimum version of Python 3.2. Once the python script has been run, the user can choose to submit answers as responses inline or as a word document. Further information regarding the usage of the tool can be found in the repository.

For instructions on how to access and use this tool, please see the <a href="https://github.com/USDepartmentofLabor/ableist-language-detector" target="_blank" rel="noopener noreferrer">Github repository</a>.

### Learn more

More background and information on model cards can be found in <a href="https://arxiv.org/abs/1810.03993" target="_blank" rel="noopener noreferrer"><i>Model Cards for Model Reporting</i> (2018)</a>


### Online Markdown Generator

To generate a markdown file of a model card, use the following form. When the form is submitted, you'll receive a download prompt for a markdown (*.md) file of the model card.

<body>
  <style>
    label,input{
      display:flex;
      flex-direction:column;
    }
  </style>
  <form accept-charset="UTF-8" enctype="multipart/form-data" id="model-card-form">
      <label for="name">What is your model name?</label>
      <input type="text" id="name" data-md-title="ModelName" data-md-type="h1">
      <label for="owners">Enter names of model owners in a "+" separated list. Example: Jane Doe, Ph.D. + John Smith</label>
      <input type="text" id="owners" data-md-title="Collaborators" data-md-type="ul">
      <label for="agencies">Enter affiliated agencies in a + seperated list. Example: xD + Census</label>
      <input type="text" id="agencies" data-md-title="Agency" data-md-type="ul">
      <label>
        How was the model acquired:<br/>
        1. internally-built - Developed and maintained by employees of the intended user<br/>
        2. off-the-shelf - Existing model aquired and modified for new use case<br/>
        3. bespoke - Outside agency developed model for this specific use case<br/>
      </label>
      <input type="text" id="acquisition" data-md-title="Ownership" data-md-type="ul">
      <div>Anticipated Use</div>
      <label for="user-agencies" id="user-agencies-label">
        In which agencies will this model be used?
      </label>
      <input type="text" id="user-agencies" data-md-title="label" data-md-type="ul" data-md-heading="Anticipated Use">
      <label for="user-individuals" id="user-individuals-label">
        Who are the intended users of the model?
      </label>
      <input type="text" id="user-individuals" data-md-title="label" data-md-type="ul">
      <label for="use-cases" id="use-cases-label">
        What are the intended use cases of the model?
      </label>
      <input type="text" id="use-cases" data-md-title="label" data-md-type="ul">
      <div>Model Information</div>
      <label for="model-version" id="model-version-label">
        What is the current model version?
      </label>
      <input type="text" id="model-version" data-md-title="label" data-md-type="ul" data-md-heading="Model Information">
      <label for="release-date" id="release-date-label">
        What is the version release date?
      </label>
      <input type="text" id="release-date" data-md-title="label" data-md-type="ul">
      <label for="changes" id="changes-label">
        What changes have been made since the last release?
      </label>
      <input type="text" id="changes" data-md-title="label" data-md-type="ul">
      <label for="license" id="license-label">
        What is the license for use?
      </label>
      <input type="text" id="license" data-md-title="label" data-md-type="ul">
      <div>Model Architecture</div>
      <label for="algorithm" id="algorithm-label">
        What type of algorithm is used?
      </label>
      <input type="text" id="algorithm" data-md-title="label" data-md-type="ul" data-md-heading="Model Architecture">
      <label for="input-format" id="input-format-label">
        How is the input data formatted?
      </label>
      <input type="text" id="input-format" data-md-title="label" data-md-type="ul">
      <label for="output-format" id="output-format-label">
        How is the output data formatted?
      </label>
      <input type="text" id="output-format" data-md-title="label" data-md-type="ul">
      <div>Datasets</div>
      <label for="training-data-pii" id="training-data-pii-label">
        Does the training dataset contain information related to individuals or human populations?
      </label>
      <input type="text" id="training-data-pii" data-md-title="label" data-md-type="ul" data-md-heading="Datasets">
      <label for="data-source" id="data-source-label">
        What is the source(s) of the training data?
      </label>
      <input type="text" id="data-source" data-md-title="label" data-md-type="ul">
      <label for="data-collection" id="data-collection-label">
        How was this data collected or generated?
      </label>
      <input type="text" id="data-collection" data-md-title="label" data-md-type="ul">
      <label for="data-variables" id="data-variables-label">
        What variables are contained in this dataset?
      </label>
      <input type="text" id="data-variables" data-md-title="label" data-md-type="ul">
      <label for="entry-count" id="entry-count-label">
        How many entries are contained in your dataset?
      </label>
      <input type="text" id="entry-count" data-md-title="label" data-md-type="ul">
      <label for="validation-percent" id="validation-percent-label">
        What percent of data is chosen as a validation set?
      </label>
      <input type="text" id="validation-percent" data-md-title="label" data-md-type="ul">
      <div>Performance Metrics</div>
      <label for="metrics" id="metrics-label">
        What metrics are used to rate model performance?
      </label>
      <input type="text" id="metrics" data-md-title="label" data-md-type="ul" data-md-heading="Performance Metrics">
      <label for="metric-reporting" id="metric-reporting-label">
        How are the metrics being reported?
      </label>
      <input type="text" id="metric-reporting" data-md-title="label" data-md-type="ul">
      <label for="confidence-interval" id="confidence-interval-label">
        What is the confidence interval of these metrics?
      </label>
      <input type="text" id="confidence-interval" data-md-title="label" data-md-type="ul">
      <label for="decision-threshold" id="decision-threshold-label">
        What decision threshold was used to compute the metric?
      </label>
      <input type="text" id="decision-threshold" data-md-title="label" data-md-type="ul">
      <label for="performance-limit" id="performance-limit-label">
        What factors limit the model's performance?
      </label>
      <input type="text" id="performance-limit" data-md-title="label" data-md-type="ul">
      <div data-md-title="Bias" data-md-type="h2">Bias</div>
      <label for="human-bias" id="human-bias-label">
        Does the training dataset contain information related to individuals or human populations?
      </label>
      <input type="text" id="human-bias" data-md-title="label" data-md-type="ul" data-md-heading="Bias">
      <label for="human-judgement" id="human-judgement-label">
        Within the workflow of this model, is there risk of human judgement injecting bias?
      </label>
      <input type="text" id="human-judgement" data-md-title="label" data-md-type="ul">
      <label for="minimize-bias" id="minimize-bias-label">
        What methods are used to minimize bias from human judgement?
      </label>
      <input type="text" id="minimize-bias" data-md-title="label" data-md-type="ul">
      <label for="minimize-bias-methods" id="minimize-bias-methods-label">
        What biases are potentially found in the training dataset from collection methods, sample size, representation, etc.?
      </label>
      <input type="text" id="minimize-bias-methods" data-md-title="label" data-md-type="ul">
      <label for="bias-eval-tools" id="bias-eval-tools-label">
        What evaluation tools have been used to evaluate bias in the training dataset?
      </label>
      <input type="text" id="bias-eval-tools" data-md-title="label" data-md-type="ul">
      <label for="bias-addressed" id="bias-addressed-label">
        How and when are biases in the dataset addressed in the workflow of the model?
      </label>
      <input type="text" id="bias-addressed" data-md-title="label" data-md-type="ul">
      <label for="bias-testing" id="bias-testing-label">
        What testing has been performed to look for bias in the model?
      </label>
      <input type="text" id="bias-testing" data-md-title="label" data-md-type="ul">
      <label for="bias-dev-time" id="bias-dev-time-label">
        What percentage of development time has been dedicated to bias mitigation?
      </label>
      <input type="text" id="bias-dev-time" data-md-title="label" data-md-type="ul">
  </form>
  <button type="submit" form="model-card-form" id="form-btn">Create Model Card Markdown File</button>
</body>
<script>

  const modelCardSubmitForm = document.getElementById("model-card-form");
  modelCardSubmitForm.addEventListener("submit", startDownload);
  let filename = "model-card";

  const markdownMap = {
    'h1': '#',
    'h2': '##',
    'h3': '###',
    'ul': '*',
  };

  function startDownload(event) {
    event.preventDefault();
    const anchor = document.createElement("a");
    const formData = collectFormData();
    const modelCardData = formData.join("\r\n");

    const downloadedBlob = new Blob([modelCardData], { type: "text/markdown" });

    const url = window.URL.createObjectURL(downloadedBlob);

    anchor.href = url;
    anchor.download = `${filename}.md`;
    anchor.style.display = "none";
    document.body.append(anchor);

    anchor.click();
    anchor.remove();
    window.URL.revokeObjectURL(url);

    return false;
  }

  function collectFormData() {
    const forms = document.querySelectorAll('form');
    const form = forms[0];
    const formRows = [];

    Array.from(form.elements).forEach((input) => {
      const { value, id, dataset } = input;
      let { mdTitle, mdType, mdHeading } = dataset;
      let labelMdType = 'h2';
      if (id !== 'form-btn') { // don't add button props to markdown file
        if (mdTitle === 'label') {
          const labelEl = document.getElementById(`${id}-label`);
          labelMdType = 'h3';
          mdTitle = (labelEl.innerText || labelEl.textContent);
        }
        if (mdHeading !== undefined) {
          formRows.push(`${markdownMap['h2']} ${mdHeading}`);
        }
        if (mdTitle === 'ModelName') {
          filename = `${input.value} Model Card`;
          formRows.push(`${markdownMap['h1']} ${filename}`);
        } else {
          formRows.push(`${markdownMap[labelMdType]} ${mdTitle}`);
          formRows.push(`${markdownMap[mdType]} ${input.value}`);
        }
      }
    });

    return formRows;
  }

</script>
