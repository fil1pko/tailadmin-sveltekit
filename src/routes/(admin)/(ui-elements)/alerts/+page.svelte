<script>
     import ComponentCard from "$components/common/ComponentCard.svelte";
     import PageBreadcrumb from "$components/common/PageBreadCrumb.svelte";
     import Alert from "$components/ui/alert/Alert.svelte";
</script>

<svelte:head>
     <title>Svelte Alerts | TailAdmin - Svelte Dashboard Template</title>
     <meta
          name="description"
          content="This is Svelte Alerts page for TailAdmin - Svelte Tailwind CSS Admin Dashboard Template"
     />
</svelte:head>

<div>
     <PageBreadcrumb pageTitle="Alerts" />

     <div class="space-y-5 sm:space-y-6">
          <ComponentCard title="Success Alert">
               <Alert
                    variant="success"
                    title="Success Message"
                    message="Be cautious when performing this action."
                    showLink={true}
                    linkHref="/"
                    linkText="Learn more"
               />
               <Alert
                    variant="success"
                    title="Success Message"
                    message="Be cautious when performing this action."
                    showLink={false}
               />
          </ComponentCard>

          <ComponentCard title="Warning Alert">
               <Alert
                    variant="warning"
                    title="Warning Message"
                    message="Be cautious when performing this action."
                    showLink={true}
                    linkHref="/"
                    linkText="Learn more"
               />
               <Alert
                    variant="warning"
                    title="Warning Message"
                    message="Be cautious when performing this action."
                    showLink={false}
               />
          </ComponentCard>

          <ComponentCard title="Error Alert">
               <Alert
                    variant="error"
                    title="Error Message"
                    message="Be cautious when performing this action."
                    showLink={true}
                    linkHref="/"
                    linkText="Learn more"
               />
               <Alert
                    variant="error"
                    title="Error Message"
                    message="Be cautious when performing this action."
                    showLink={false}
               />
          </ComponentCard>

          <ComponentCard title="Info Alert">
               <Alert
                    variant="info"
                    title="Info Message"
                    message="Be cautious when performing this action."
                    showLink={true}
                    linkHref="/"
                    linkText="Learn more"
               />
               <Alert
                    variant="info"
                    title="Info Message"
                    message="Be cautious when performing this action."
                    showLink={false}
               />
          </ComponentCard>
     </div>
</div>