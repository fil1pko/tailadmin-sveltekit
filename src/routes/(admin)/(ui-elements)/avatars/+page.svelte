<script>
     import ComponentCard from "$components/common/ComponentCard.svelte";
     import PageBreadcrumb from "$components/common/PageBreadCrumb.svelte";
     import Avatar from "$components/ui/avatar/Avatar.svelte";
</script>

<svelte:head>
     <title>Svelte Avatars | TailAdmin - Svelte Dashboard Template</title>
     <meta
          name="description"
          content="This is Svelte Avatars page for TailAdmin - Svelte Tailwind CSS Admin Dashboard Template"
     />
</svelte:head>

<div>
     <PageBreadcrumb pageTitle="Avatar" />

     <div class="space-y-5 sm:space-y-6">
          <ComponentCard title="Default Avatar">
               <div class="flex flex-col items-center justify-center gap-5 sm:flex-row">
                    <Avatar src="/images/user/user-01.jpg" size="xsmall" />
                    <Avatar src="/images/user/user-01.jpg" size="small" />
                    <Avatar src="/images/user/user-01.jpg" size="medium" />
                    <Avatar src="/images/user/user-01.jpg" size="large" />
                    <Avatar src="/images/user/user-01.jpg" size="xlarge" />
                    <Avatar src="/images/user/user-01.jpg" size="xxlarge" />
               </div>
          </ComponentCard>

          <ComponentCard title="Avatar with online indicator">
               <div class="flex flex-col items-center justify-center gap-5 sm:flex-row">
                    <Avatar
                         src="/images/user/user-01.jpg"
                         size="xsmall"
                         status="online"
                    />
                    <Avatar
                         src="/images/user/user-01.jpg"
                         size="small"
                         status="online"
                    />
                    <Avatar
                         src="/images/user/user-01.jpg"
                         size="medium"
                         status="online"
                    />
                    <Avatar
                         src="/images/user/user-01.jpg"
                         size="large"
                         status="online"
                    />
                    <Avatar
                         src="/images/user/user-01.jpg"
                         size="xlarge"
                         status="online"
                    />
                    <Avatar
                         src="/images/user/user-01.jpg"
                         size="xxlarge"
                         status="online"
                    />
               </div>
          </ComponentCard>

          <ComponentCard title="Avatar with Offline indicator">
               <div class="flex flex-col items-center justify-center gap-5 sm:flex-row">
                    <Avatar
                         src="/images/user/user-01.jpg"
                         size="xsmall"
                         status="offline"
                    />
                    <Avatar
                         src="/images/user/user-01.jpg"
                         size="small"
                         status="offline"
                    />
                    <Avatar
                         src="/images/user/user-01.jpg"
                         size="medium"
                         status="offline"
                    />
                    <Avatar
                         src="/images/user/user-01.jpg"
                         size="large"
                         status="offline"
                    />
                    <Avatar
                         src="/images/user/user-01.jpg"
                         size="xlarge"
                         status="offline"
                    />
                    <Avatar
                         src="/images/user/user-01.jpg"
                         size="xxlarge"
                         status="offline"
                    />
               </div>
          </ComponentCard>

          <ComponentCard title="Avatar with busy indicator">
               <div class="flex flex-col items-center justify-center gap-5 sm:flex-row">
                    <Avatar
                         src="/images/user/user-01.jpg"
                         size="xsmall"
                         status="busy"
                    />
                    <Avatar
                         src="/images/user/user-01.jpg"
                         size="small"
                         status="busy"
                    />
                    <Avatar
                         src="/images/user/user-01.jpg"
                         size="medium"
                         status="busy"
                    />
                    <Avatar
                         src="/images/user/user-01.jpg"
                         size="large"
                         status="busy"
                    />
                    <Avatar
                         src="/images/user/user-01.jpg"
                         size="xlarge"
                         status="busy"
                    />
                    <Avatar
                         src="/images/user/user-01.jpg"
                         size="xxlarge"
                         status="busy"
                    />
               </div>
          </ComponentCard>
     </div>
</div>