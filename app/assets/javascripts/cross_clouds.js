$(document).ready(function() {	
	
	$('#cross_cloud_list').change(function(){		
	      $.ajax({url: '/selectclouds',
	    	'beforeSend': function(xhr) {xhr.setRequestHeader("Accept", "text/javascript")},
	        data: 'selected_cloud='+$(this).find("option:selected").text()	        
	      })
	    });				 
	
	
	/*$("#cross_cloud_list").change(function() {
		var cc = $(this).find("option:selected").text()
		switch (cc) {
		case "Amazon EC2":			
			$("<div class='offset2' id='cloud_logo'><img src='/assets/logo_aws.png' height='100' width='100'/></div>").replaceAll('#cloud_logo');
			$("<div class='offset2' id='acc_link'><a href='http://aws.amazon.com/console/' target='_blank'>Create an account for amazon.com</a></div>").replaceAll('#acc_link');
			$("#cc_name").show();
			$("#cc_group").show();
			$("#cc_image").show();
			$("#cc_pname").hide();
			$("#cc_flavor").show();
			$("#cc_sshkey").show();
			$("#cc_sshuser").show();
			$("#cc_awspk").show();
			$("#cc_rsapk").show();
			$("#cc_awsak").show();
			$("#cc_awssk").show();
			$("#cc_gcli").hide();
			$("#cc_gsk").hide();			
			break;
		case "hp cloud":		
			$("<div class='offset2' id='cloud_logo'><img src='/assets/logo_hp.png' height='100' width='100'/></div>").replaceAll('#cloud_logo');
			$("<div class='offset2' id='acc_link'><a href='https://account.hpcloud.com/signup' target='_blank'>Create an account for hpcloud.com</a></div>").replaceAll('#acc_link');
			$("#cc_name").show();
			$("#cc_group").show();
			$("#cc_image").show();
			$("#cc_pname").hide();
			$("#cc_flavor").show();
			$("#cc_sshkey").show();
			$("#cc_sshuser").show();
			$("#cc_awspk").show();
			$("#cc_rsapk").show();
			$("#cc_awsak").show();
			$("#cc_awssk").show();
			$("#cc_gcli").hide();
			$("#cc_gsk").hide();
			break;
		case "Google cloud Engine":			
			$("<div class='offset2' id='acc_link'><a href='https://accounts.google.com/SignUp' target='_blank'>Create an account for google.com</a></div>").replaceAll('#acc_link');
			$('#google_auth').prop("disabled",false);			
			$("<div class='offset2' id='cloud_logo'>" +
			   "<a href='/auth/google_oauth2'  target='_self'><img src='/assets/signin_google.png' /></a></br>" +
					"<img src='/assets/logo_gce.png' height='100' width='100'/>" +
					"</div>").replaceAll('#cloud_logo');	
			//$("#cross_cloud_show").html('<%= escape_javascript(render :partial => "cross_clouds/google_form").html_safe %>');
			$('#cross_cloud_show').html('<%= escape_javascript(render :partial => "cross_clouds/google_form").html_safe %>');
			/*$("#cc_name").show();
			$("#cc_group").hide();
			$("#cc_pname").show();
			$("#cc_image").show();
			$("#cc_flavor").show();
			$("#cc_sshkey").hide();
			$("#cc_sshuser").show();
			$("#cc_awspk").hide();
			$("#cc_rsapk").show();
			$("#cc_awsak").hide();
			$("#cc_awssk").hide();
			$("#cc_gcli").show();
			$("#cc_gsk").show();
			break;
		default:			
			$("<div class='offset2' id='cloud_logo'><img src='/assets/logo_aws.png' height='100' width='100'/></div>").replaceAll('#cloud_logo');
     		$("<div class='offset2' id='acc_link'><a href='http://aws.amazon.com/console/' target='_blank'>Create an account for amazon.com</a></div>").replaceAll('#acc_link');
		    $("#cross_cloud_name").val("aws");
		    $("#cc_name").show();
			$("#cc_group").show();
			$("#cc_image").show();
			$("#cc_pname").hide();
			$("#cc_flavor").show();
			$("#cc_sshkey").show();
			$("#cc_sshuser").show();
			$("#cc_awspk").show();
			$("#cc_rsapk").show();
			$("#cc_awsak").show();
			$("#cc_awssk").show();
			$("#cc_gcli").hide();
			$("#cc_gsk").hide();		   
		}
		
	});*/
	

});


