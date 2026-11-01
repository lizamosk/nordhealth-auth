# nord-tab-group

> Tab Group allows multiple panels to be contained within a single window,
> using tabs as a navigational element.

## Usage

This section includes guidelines for designers and developers about the usage of this component in different contexts.

> **Do:** - Use to allow multiple panels to be contained within a single window.
- Use the tab panel and tab components within the tab group component.
- Use the tab and tab panel components in order to create a tab group content structure.

> **Don't:** - Don’t use tabs to navigate to other pages. Use navigation or links instead.
- Don't use other components to the tab and tab panel within the tab group component.
- Don't obscure important information within a tab panel that isn't revealed by default.
- Don't add a tab or tab panel component without providing an accompanying panel or tab.

---

## Content guidelines

When writing tab labels, always write them in sentence case, not title case. The first word should be capitalized and the rest lowercase (unless a proper noun):

> **Do:** My tasks

> **Don't:** My Tasks

Avoid unnecessary words and articles in tab labels, such as “the”, “an” or “a”:

> **Do:** Dashboard

> **Don't:** The dashboard

Avoid ending tab labels in punctuation:

> **Do:** Patients

> **Don't:** Patients.

Use as few words as possible to describe each tab label:

> **Do:** Payments

> **Don't:** Payments in your clinic

Avoid all caps for tab labels:

> **Do:** Dashboard

> **Don't:** DASHBOARD

---

## Additional considerations

- If the content contained within the tabs UI has significance or is important for the user to see, consider using a different form of presentation that doesn't obscure it.
- If there is a particular tab panel you wish to show out of order of the tabs UI itself consider using the `selected` option on the tab component related to the panel to select the tab but prevent the order of the tabs being affected.

## Examples

### Basic

```html
<nord-tab-group label="Title">
      <nord-tab slot="tab">Overview</nord-tab>
      <nord-tab-panel>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet ipsam enim sed sequi voluptatibus, culpa
          explicabo voluptate maxime a, cumque ea reprehenderit ad consequuntur veniam? Fuga impedit iste tenetur.
        </p>
      </nord-tab-panel>
      <nord-tab slot="tab">Terminals</nord-tab>
      <nord-tab-panel>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi, incidunt eum ad, rerum dolorum sequi
          numquam illum deleniti nobis doloremque asperiores natus perferendis, recusandae at dolorem et aperiam totam.
        </p>
      </nord-tab-panel>
      <nord-tab slot="tab">Stores</nord-tab>
      <nord-tab-panel>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aperiam doloribus. Dolore, eaque. Distinctio
          consequatur alias quae commodi praesentium recusandae libero, voluptate veniam. Commodi, velit ad ex sequi ut
          fugit?
        </p>
      </nord-tab-panel>
    </nord-tab-group>
```

### Cards Inside Panels

```html
<nord-tab-group label="Title" sticky padding="l">
      <nord-tab slot="tab">Overview</nord-tab>
      <nord-tab-panel>
        <nord-card>
          <h2 slot="header">Card header 2</h2>
          Card content
        </nord-card>
      </nord-tab-panel>
      <nord-tab slot="tab">Terminals</nord-tab>
      <nord-tab-panel>
        <nord-card>
          <h2 slot="header">Card header 2</h2>
          Card content
        </nord-card>
      </nord-tab-panel>
      <nord-tab slot="tab">Stores</nord-tab>
      <nord-tab-panel>
        <nord-card>
          <h2 slot="header">Card header 3</h2>
          Card content
        </nord-card>
      </nord-tab-panel>
      <nord-tab slot="tab">Account holders</nord-tab>
      <nord-tab-panel>
        <nord-card>
          <h2 slot="header">Card header 4</h2>
          Card content
        </nord-card>
      </nord-tab-panel>
    </nord-tab-group>
```

### Selected

```html
<nord-tab-group label="Title">
      <nord-tab slot="tab">Overview</nord-tab>
      <nord-tab-panel>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet ipsam enim sed sequi voluptatibus, culpa
          explicabo voluptate maxime a, cumque ea reprehenderit ad consequuntur veniam? Fuga impedit iste tenetur.
        </p>
      </nord-tab-panel>
      <nord-tab slot="tab" selected>Terminals</nord-tab>
      <nord-tab-panel>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi, incidunt eum ad, rerum dolorum sequi
          numquam illum deleniti nobis doloremque asperiores natus perferendis, recusandae at dolorem et aperiam totam.
        </p>
      </nord-tab-panel>
      <nord-tab slot="tab">Stores</nord-tab>
      <nord-tab-panel>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aperiam doloribus. Dolore, eaque. Distinctio
          consequatur alias quae commodi praesentium recusandae libero, voluptate veniam. Commodi, velit ad ex sequi ut
          fugit?
        </p>
      </nord-tab-panel>
    </nord-tab-group>
```

### Sticky

```html
<nord-tab-group label="Title" sticky>
      <nord-tab slot="tab">Overview</nord-tab>
      <nord-tab-panel>
        <div class="n-typeset">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo officia sint soluta consequuntur, quae corporis
            perspiciatis veritatis culpa vitae delectus, nulla, incidunt dolorem. Mollitia blanditiis iusto voluptatem
            repellat facere voluptates?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore veritatis, molestias incidunt quas quos dolor.
            Aperiam neque, commodi, velit corrupti mollitia quos tempora, eos laboriosam numquam sequi impedit repellat?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi voluptas veritatis atque, repellat ullam
            tenetur laudantium modi provident totam, eveniet natus aperiam porro voluptates maiores laboriosam quod.
            Incidunt, labore reprehenderit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, incidunt! Quas dicta beatae eveniet, sit
            fugiat consequuntur nobis placeat recusandae, reiciendis, blanditiis incidunt illo dolore ratione quia
            repudiandae nulla sunt.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vitae tempore quae, ducimus in ipsa neque
            illo dolores aliquid. Optio, recusandae. Iste voluptatibus itaque repudiandae cupiditate unde at? Expedita, eum.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo officia sint soluta consequuntur, quae corporis
            perspiciatis veritatis culpa vitae delectus, nulla, incidunt dolorem. Mollitia blanditiis iusto voluptatem
            repellat facere voluptates?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore veritatis, molestias incidunt quas quos dolor.
            Aperiam neque, commodi, velit corrupti mollitia quos tempora, eos laboriosam numquam sequi impedit repellat?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi voluptas veritatis atque, repellat ullam
            tenetur laudantium modi provident totam, eveniet natus aperiam porro voluptates maiores laboriosam quod.
            Incidunt, labore reprehenderit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, incidunt! Quas dicta beatae eveniet, sit
            fugiat consequuntur nobis placeat recusandae, reiciendis, blanditiis incidunt illo dolore ratione quia
            repudiandae nulla sunt.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vitae tempore quae, ducimus in ipsa neque
            illo dolores aliquid. Optio, recusandae. Iste voluptatibus itaque repudiandae cupiditate unde at? Expedita, eum.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo officia sint soluta consequuntur, quae corporis
            perspiciatis veritatis culpa vitae delectus, nulla, incidunt dolorem. Mollitia blanditiis iusto voluptatem
            repellat facere voluptates?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore veritatis, molestias incidunt quas quos dolor.
            Aperiam neque, commodi, velit corrupti mollitia quos tempora, eos laboriosam numquam sequi impedit repellat?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi voluptas veritatis atque, repellat ullam
            tenetur laudantium modi provident totam, eveniet natus aperiam porro voluptates maiores laboriosam quod.
            Incidunt, labore reprehenderit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, incidunt! Quas dicta beatae eveniet, sit
            fugiat consequuntur nobis placeat recusandae, reiciendis, blanditiis incidunt illo dolore ratione quia
            repudiandae nulla sunt.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vitae tempore quae, ducimus in ipsa neque
            illo dolores aliquid. Optio, recusandae. Iste voluptatibus itaque repudiandae cupiditate unde at? Expedita, eum.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo officia sint soluta consequuntur, quae corporis
            perspiciatis veritatis culpa vitae delectus, nulla, incidunt dolorem. Mollitia blanditiis iusto voluptatem
            repellat facere voluptates?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore veritatis, molestias incidunt quas quos dolor.
            Aperiam neque, commodi, velit corrupti mollitia quos tempora, eos laboriosam numquam sequi impedit repellat?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi voluptas veritatis atque, repellat ullam
            tenetur laudantium modi provident totam, eveniet natus aperiam porro voluptates maiores laboriosam quod.
            Incidunt, labore reprehenderit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, incidunt! Quas dicta beatae eveniet, sit
            fugiat consequuntur nobis placeat recusandae, reiciendis, blanditiis incidunt illo dolore ratione quia
            repudiandae nulla sunt.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vitae tempore quae, ducimus in ipsa neque
            illo dolores aliquid. Optio, recusandae. Iste voluptatibus itaque repudiandae cupiditate unde at? Expedita, eum.
          </p>
        </div>
      </nord-tab-panel>
      <nord-tab slot="tab">Terminals</nord-tab>
      <nord-tab-panel>
        <div class="n-typeset">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi, incidunt eum ad, rerum dolorum sequi
            numquam illum deleniti nobis doloremque asperiores natus perferendis, recusandae at dolorem et aperiam totam.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, corporis vero vel possimus ab cum! Soluta, illum
            sint dolore, velit nisi alias ad, aliquam deleniti iure impedit quasi labore rem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perferendis reprehenderit aut ducimus voluptatem
            excepturi sed cumque vero cupiditate aliquid? Repudiandae quis dolorem optio accusantium debitis minus, ducimus
            consequatur quisquam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolore rerum expedita velit sit accusamus
            molestiae placeat eum, mollitia sunt voluptatum quos fugiat maiores magni aut temporibus necessitatibus dolorum
            atque.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed incidunt recusandae ullam beatae, deleniti eaque
            amet nihil, cumque et, reiciendis inventore at hic quasi debitis suscipit voluptatem illo pariatur neque?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo officia sint soluta consequuntur, quae corporis
            perspiciatis veritatis culpa vitae delectus, nulla, incidunt dolorem. Mollitia blanditiis iusto voluptatem
            repellat facere voluptates?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore veritatis, molestias incidunt quas quos dolor.
            Aperiam neque, commodi, velit corrupti mollitia quos tempora, eos laboriosam numquam sequi impedit repellat?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi voluptas veritatis atque, repellat ullam
            tenetur laudantium modi provident totam, eveniet natus aperiam porro voluptates maiores laboriosam quod.
            Incidunt, labore reprehenderit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, incidunt! Quas dicta beatae eveniet, sit
            fugiat consequuntur nobis placeat recusandae, reiciendis, blanditiis incidunt illo dolore ratione quia
            repudiandae nulla sunt.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vitae tempore quae, ducimus in ipsa neque
            illo dolores aliquid. Optio, recusandae. Iste voluptatibus itaque repudiandae cupiditate unde at? Expedita, eum.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo officia sint soluta consequuntur, quae corporis
            perspiciatis veritatis culpa vitae delectus, nulla, incidunt dolorem. Mollitia blanditiis iusto voluptatem
            repellat facere voluptates?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore veritatis, molestias incidunt quas quos dolor.
            Aperiam neque, commodi, velit corrupti mollitia quos tempora, eos laboriosam numquam sequi impedit repellat?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi voluptas veritatis atque, repellat ullam
            tenetur laudantium modi provident totam, eveniet natus aperiam porro voluptates maiores laboriosam quod.
            Incidunt, labore reprehenderit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, incidunt! Quas dicta beatae eveniet, sit
            fugiat consequuntur nobis placeat recusandae, reiciendis, blanditiis incidunt illo dolore ratione quia
            repudiandae nulla sunt.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vitae tempore quae, ducimus in ipsa neque
            illo dolores aliquid. Optio, recusandae. Iste voluptatibus itaque repudiandae cupiditate unde at? Expedita, eum.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo officia sint soluta consequuntur, quae corporis
            perspiciatis veritatis culpa vitae delectus, nulla, incidunt dolorem. Mollitia blanditiis iusto voluptatem
            repellat facere voluptates?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore veritatis, molestias incidunt quas quos dolor.
            Aperiam neque, commodi, velit corrupti mollitia quos tempora, eos laboriosam numquam sequi impedit repellat?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi voluptas veritatis atque, repellat ullam
            tenetur laudantium modi provident totam, eveniet natus aperiam porro voluptates maiores laboriosam quod.
            Incidunt, labore reprehenderit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, incidunt! Quas dicta beatae eveniet, sit
            fugiat consequuntur nobis placeat recusandae, reiciendis, blanditiis incidunt illo dolore ratione quia
            repudiandae nulla sunt.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vitae tempore quae, ducimus in ipsa neque
            illo dolores aliquid. Optio, recusandae. Iste voluptatibus itaque repudiandae cupiditate unde at? Expedita, eum.
          </p>
        </div>
      </nord-tab-panel>
      <nord-tab slot="tab">Stores</nord-tab>
      <nord-tab-panel>
        <div class="n-typeset">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores harum, eligendi optio rem cumque aliquam eos.
            Pariatur ea eligendi possimus eius? Excepturi beatae perspiciatis aliquid recusandae accusantium culpa dolor
            cum.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque pariatur ipsam deserunt quia consequatur!
            Eligendi aliquid enim eius, quos quasi velit! Doloremque nam, perferendis fugit corporis similique pariatur quam
            aliquid.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sint non delectus quas? Quos excepturi aspernatur
            dolore ab esse debitis, harum laboriosam hic ea incidunt quaerat? Inventore aperiam sint odio.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt architecto consequuntur harum aperiam dolorum
            tempore corrupti quaerat in deserunt non ab, corporis placeat dicta porro quisquam voluptatem dolores unde!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid iste debitis reiciendis optio quae ratione et
            obcaecati perspiciatis. Nemo ex aliquam consectetur? Accusamus, voluptas nesciunt. Nulla aperiam in tempore
            odio!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo officia sint soluta consequuntur, quae corporis
            perspiciatis veritatis culpa vitae delectus, nulla, incidunt dolorem. Mollitia blanditiis iusto voluptatem
            repellat facere voluptates?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore veritatis, molestias incidunt quas quos dolor.
            Aperiam neque, commodi, velit corrupti mollitia quos tempora, eos laboriosam numquam sequi impedit repellat?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi voluptas veritatis atque, repellat ullam
            tenetur laudantium modi provident totam, eveniet natus aperiam porro voluptates maiores laboriosam quod.
            Incidunt, labore reprehenderit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, incidunt! Quas dicta beatae eveniet, sit
            fugiat consequuntur nobis placeat recusandae, reiciendis, blanditiis incidunt illo dolore ratione quia
            repudiandae nulla sunt.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vitae tempore quae, ducimus in ipsa neque
            illo dolores aliquid. Optio, recusandae. Iste voluptatibus itaque repudiandae cupiditate unde at? Expedita, eum.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo officia sint soluta consequuntur, quae corporis
            perspiciatis veritatis culpa vitae delectus, nulla, incidunt dolorem. Mollitia blanditiis iusto voluptatem
            repellat facere voluptates?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore veritatis, molestias incidunt quas quos dolor.
            Aperiam neque, commodi, velit corrupti mollitia quos tempora, eos laboriosam numquam sequi impedit repellat?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi voluptas veritatis atque, repellat ullam
            tenetur laudantium modi provident totam, eveniet natus aperiam porro voluptates maiores laboriosam quod.
            Incidunt, labore reprehenderit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, incidunt! Quas dicta beatae eveniet, sit
            fugiat consequuntur nobis placeat recusandae, reiciendis, blanditiis incidunt illo dolore ratione quia
            repudiandae nulla sunt.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vitae tempore quae, ducimus in ipsa neque
            illo dolores aliquid. Optio, recusandae. Iste voluptatibus itaque repudiandae cupiditate unde at? Expedita, eum.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo officia sint soluta consequuntur, quae corporis
            perspiciatis veritatis culpa vitae delectus, nulla, incidunt dolorem. Mollitia blanditiis iusto voluptatem
            repellat facere voluptates?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore veritatis, molestias incidunt quas quos dolor.
            Aperiam neque, commodi, velit corrupti mollitia quos tempora, eos laboriosam numquam sequi impedit repellat?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi voluptas veritatis atque, repellat ullam
            tenetur laudantium modi provident totam, eveniet natus aperiam porro voluptates maiores laboriosam quod.
            Incidunt, labore reprehenderit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, incidunt! Quas dicta beatae eveniet, sit
            fugiat consequuntur nobis placeat recusandae, reiciendis, blanditiis incidunt illo dolore ratione quia
            repudiandae nulla sunt.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vitae tempore quae, ducimus in ipsa neque
            illo dolores aliquid. Optio, recusandae. Iste voluptatibus itaque repudiandae cupiditate unde at? Expedita, eum.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo officia sint soluta consequuntur, quae corporis
            perspiciatis veritatis culpa vitae delectus, nulla, incidunt dolorem. Mollitia blanditiis iusto voluptatem
            repellat facere voluptates?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore veritatis, molestias incidunt quas quos dolor.
            Aperiam neque, commodi, velit corrupti mollitia quos tempora, eos laboriosam numquam sequi impedit repellat?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi voluptas veritatis atque, repellat ullam
            tenetur laudantium modi provident totam, eveniet natus aperiam porro voluptates maiores laboriosam quod.
            Incidunt, labore reprehenderit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, incidunt! Quas dicta beatae eveniet, sit
            fugiat consequuntur nobis placeat recusandae, reiciendis, blanditiis incidunt illo dolore ratione quia
            repudiandae nulla sunt.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vitae tempore quae, ducimus in ipsa neque
            illo dolores aliquid. Optio, recusandae. Iste voluptatibus itaque repudiandae cupiditate unde at? Expedita, eum.
          </p>
        </div>
      </nord-tab-panel>
    </nord-tab-group>
```

### Tabs In Cards

```html
<nord-stack>
      <nord-card padding="none">
        <nord-tab-group label="Title" padding="m">
          <nord-tab slot="tab">Overview</nord-tab>
          <nord-tab-panel>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet ipsam enim sed sequi voluptatibus,
              culpa explicabo voluptate maxime a, cumque ea reprehenderit ad consequuntur veniam? Fuga impedit iste tenetur.
            </p>
          </nord-tab-panel>
          <nord-tab slot="tab">Terminals</nord-tab>
          <nord-tab-panel>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi, incidunt eum ad, rerum dolorum
              sequi numquam illum deleniti nobis doloremque asperiores natus perferendis, recusandae at dolorem et aperiam
              totam.
            </p>
          </nord-tab-panel>
          <nord-tab slot="tab">Stores</nord-tab>
          <nord-tab-panel>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aperiam doloribus. Dolore, eaque. Distinctio
              consequatur alias quae commodi praesentium recusandae libero, voluptate veniam. Commodi, velit ad ex sequi ut
              fugit?
            </p>
          </nord-tab-panel>
        </nord-tab-group>
      </nord-card>
      <nord-card padding="none">
        <nord-tab-group label="Title" padding="l">
          <nord-tab slot="tab">Overview</nord-tab>
          <nord-tab-panel>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt amet ipsam enim sed sequi voluptatibus,
              culpa explicabo voluptate maxime a, cumque ea reprehenderit ad consequuntur veniam? Fuga impedit iste tenetur.
            </p>
          </nord-tab-panel>
          <nord-tab slot="tab">Terminals</nord-tab>
          <nord-tab-panel>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi, incidunt eum ad, rerum dolorum
              sequi numquam illum deleniti nobis doloremque asperiores natus perferendis, recusandae at dolorem et aperiam
              totam.
            </p>
          </nord-tab-panel>
          <nord-tab slot="tab">Stores</nord-tab>
          <nord-tab-panel>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aperiam doloribus. Dolore, eaque. Distinctio
              consequatur alias quae commodi praesentium recusandae libero, voluptate veniam. Commodi, velit ad ex sequi ut
              fugit?
            </p>
          </nord-tab-panel>
        </nord-tab-group>
      </nord-card>
    </nord-stack>
```

### Tabs In Popout

```html
<nord-button aria-controls="example" aria-haspopup="true">
      Download <nord-icon slot="end" name="interface-download"></nord-icon>
    </nord-button>

    <nord-popout id="example">
      <nord-stack class="n:p-m" direction="horizontal" align-items="center">
        <nord-stack direction="horizontal" align-items="center" gap="s">
          <h3 class="n:text-l n:font-active">Download patient data</h3>
        </nord-stack>
        <nord-icon name="interface-help" aria-describedby="tooltip" label="Help"></nord-icon>
      </nord-stack>

      <nord-tab-group label="Download options" padding="m">
        <nord-tab slot="tab">JSON</nord-tab>
        <nord-tab-panel>
          <nord-button variant="primary">
            Download patient-data.json
            <nord-icon slot="end" name="interface-download"></nord-icon>
          </nord-button>
          <p class="n-typescale-s n:my-s">Data will be downloaded directly to your device.</p>
        </nord-tab-panel>
        <nord-tab slot="tab">CSV</nord-tab>
        <nord-tab-panel>
          <nord-button variant="primary">
            Download patient-data.csv
            <nord-icon slot="end" name="interface-download"></nord-icon>
          </nord-button>
          <p class="n-typescale-s n:my-s">Data will be downloaded directly to your device.</p>
        </nord-tab-panel>
        <nord-tab slot="tab">Excel</nord-tab>
        <nord-tab-panel>
          <nord-button variant="primary">
            Download patient-data.xlsx
            <nord-icon slot="end" name="interface-download"></nord-icon>
          </nord-button>
          <p class="n-typescale-s n:my-s">Data will be downloaded directly to your device.</p>
        </nord-tab-panel>
      </nord-tab-group>
      <nord-dropdown-group heading="Viewing options" class="n:p-s">
        <nord-dropdown-item>
          <nord-icon slot="start" name="interface-new-window"></nord-icon>
          Open in a new window
        </nord-dropdown-item>
        <nord-dropdown-item
          ><nord-icon slot="start" name="interface-copy"></nord-icon>
          Copy a direct link
        </nord-dropdown-item>
      </nord-dropdown-group>
    </nord-popout>

    <nord-tooltip id="tooltip">Select a download option</nord-tooltip>
```

## API Reference

### Properties

- **label** (`string`, default: `''`) — Adds an accessible label to the tab list container.
- **padding** (`'m' | 'l' | 'none' | undefined`, default: `'m'`) — Controls the padding of the tab group component.
- **sticky** (`boolean`, default: `false`) — Whether the tab list sticks to the top of the tab group as you scroll.

### Slots

- **(default)** — The element which contains the content to be revealed.
- **tab** — The element which contains all tabs to reveal tabbed content.

### CSS Custom Properties

- `--n-tab-group-padding` (default: `0`) — Controls the padding around the tab group (including the tab list), using our <a href="/tokens/#space">spacing tokens</a>.

### Dependencies

- `tab`

<!--
Source: https://nordhealth.design/raw/components/tab-group.md
-->
