<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="./core-min.js"></script>
<script src="./md5-min.js"></script>
<script src="./wildfire-labs.js"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">

## Welcome

Thank you for attending this DevOps on IBM Z Workshop. On this page, you will find links to lab connection instructions, workshop exercises and connection credentials.  Credentials are unique for each participant.


## Accessing the hands-on lab

For the lab portion of the workshop, you will need to connect to a cloud hosted instance containing the necessary software. It is highly recommended to use remote desktop connection software, available for free on Mac and Windows. (Note: Windows by default should have "Remote Desktop Connection" installed, ready to use.)  Connection information will be provided in the section below.

- Click [here](https://github.com/DevOps-on-IBMZ/Workshop-Access/blob/main/Instructions%20to%20use%20the%20DevOps%20PoT%20remotely_Aug-18-2021.pdf) to read the instructions for IBM System access.

- The workshop workbook is on your remote desktop, or can be downloaded from [here](https://github.com/vcallaghan/Z-DevOps-Workshop-Workbook/blob/main/Workbook%20-%20DevOps%20on%20Z%20PoT%20December%2016-2021.pdf) to view it locally.  

During the session, we recommend having the workbook open on another device (laptop/tablet) in order to maximize screen real estate for lab exercises.


**Please enter your email address used for registration to retrieve your unique log in details.**

<form onsubmit="return false;">
<div class="input-group mb-3 col-6">
<span class="input-group-text" id="basic-addon1">@</span>
<input type="email" class="form-control" placeholder="Registration Email" aria-label="Email" aria-describedby="basic-addon1" id="registration-email" maxlength="50" required oninput="validate();">
</div>
<div class="col-6">
<button id="btn-submit" class="btn btn-primary" type="submit" onclick="getLab(document.getElementById('registration-email').value)" disabled>Submit</button>
</div>
</form>
<div id="lab" class=".container .text-monospace">
<em>Note you will need a confirmed registration to access the lab.</em>
</div>

## Help 
Having trouble with labs? Send an email to [Wilbert Kho](mailto: wilbert@us.ibm.com) or [Vanessa Callaghan](mailto: vanessa.r.callaghan@ibm.com) and we will help you sort it out.
