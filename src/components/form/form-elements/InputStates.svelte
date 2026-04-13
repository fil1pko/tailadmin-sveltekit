<script lang="ts">
     import ComponentCard from "../../common/ComponentCard.svelte";
     import Input from "../input/InputField.svelte";
     import Label from "../Label.svelte";

     let email = $state("");
     let error = $state(false);

     function validateEmail(value: string) {
          const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
          error = !isValidEmail;
          return isValidEmail;
     }

     function handleEmailChange(e: Event) {
          const target = e.target as HTMLInputElement;
          email = target.value;
          validateEmail(email);
     }
</script>

<ComponentCard
     title="Input States"
     desc="Validation styles for error, success and disabled states on form controls."
>
     <div class="space-y-5 sm:space-y-6">
          <div>
               <Label>Email</Label>
               <Input
                    type="email"
                    value={email}
                    {error}
                    oninput={handleEmailChange}
                    placeholder="Enter your email"
                    hint={error ? "This is an invalid email address." : ""}
               />
          </div>

          <div>
               <Label>Email</Label>
               <Input
                    type="email"
                    value={email}
                    success={!error && email.length > 0}
                    oninput={handleEmailChange}
                    placeholder="Enter your email"
                    hint={!error && email.length > 0 ? "Valid email!" : ""}
               />
          </div>

          <div>
               <Label>Email</Label>
               <Input
                    type="text"
                    value="disabled@example.com"
                    disabled={true}
                    placeholder="Disabled email"
                    hint="This field is disabled."
               />
          </div>
     </div>
</ComponentCard>