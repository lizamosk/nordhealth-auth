# Nord Design System architecture

> You’re reading the eigth Nord Design System monthly update. This month I wanted to give a little more insight into how we’ve architectured Nord’s packages and how they’re interconnected.

You’re reading the eigth Nord Design System monthly update. This month I wanted to give a little more insight into how we’ve architectured Nord’s packages and how they’re interconnected.

One of the recent major changes in Nord is that we’ve re-designed the underlying package architecture. The reason why we decided to do such a big fundamental change this close to our official release, is that we felt like the original structure was too complex to use and that there were too many dependencies between the different packages overall.

In early January we decided to do something about this and simplify the architecture. Originally, if you wanted to utilize any of the components, you had to first install and link our [Design Tokens](/tokens/), then install and link [Webfonts](/docs/developer/webfonts/), then our [CSS Framework](/docs/developer/css-framework/), [Themes](/design/themes/), and finally the [Web Components](/components/) themself. That’s quite a few steps, huh?!

**In the re-designed architecture we have two different levels to the packages:**

1. On the first level, we have packages called [Webfonts](/docs/developer/webfonts/), [Design Tokens](/tokens/), and [Nordicons](/icons/) (illustrated below). These packages are like atoms of the systems as they don’t have external or internal dependencies into any other packages in the system.
2. On the second level, we have [CSS Framework](/docs/developer/css-framework/), [Web Components](/components/), and [Themes](/design/themes/) (illustrated below). These packages internally depend on the first level packages, but we wanted to hide these dependencies for the end user, Frontend Developer in this case, meaning that you’d more or less always install one or more of the second level packages only into your app to consume parts of the system:

![Nord Design System architecture overview](/img/updates/architecture/1.jpg)As an example, if you would like to use our **CSS Framework,** you would only install that specific NPM package and that’s really it. You don’t have to care, as a user, that internally this package also also uses our **Webfonts** and **Design Token** packages:

![Dependencies for utilizing CSS Framework](/img/updates/architecture/2.jpg)Another example could be that if you’d want to skin your application with one of our themes, you’d also add the **Themes** package and choose a theme to use from it. Again, internally, we still use both **Webfonts** and **Design Token** packages, but as a user, you don’t have to care about those:

![Dependencies for utilizing Nord Themes](/img/updates/architecture/3.jpg)Finally, in the below example, we show all three first level packages being used internally (Webfonts, Design Tokens and Nordicons), but for the end user, only **CSS Framework** and **Web Components** will be relevant in this case:

![Dependencies for utilizing Web Components](/img/updates/architecture/4.jpg)You could also directly utilize one of the first level packages, like the **Design Tokens** if you’re working on a native iOS application and want to pull in the base colors and similar styles in XML format:

![Dependencies for utilizing Design Tokens on iOS](/img/updates/architecture/5.jpg)While the above is still possible, we wanted to avoid the user having to install a lot of different dependencies to be able to use a utility class from the CSS Framework, or a component from the Web Components package.

All of this seems quite evident in hindsight, but our original thinking was to strive for modularity to reduce the complexity and improve our system’s reusability by breaking it into small, easier to consume parts.

This modularity eventually increased the complexity for the users because we didn’t consider the API carefully enough, especially when it comes to CSS Custom Properties and the complex theming system we’ve got.

In the new architecture we’ve still kept the same level of modularity inside the system, but simplified it for our users and now offer a better and simpler API. These changes also nicely align with one of our key [design principles](/design/foundations/principles/) which states that **“developers should be able to start using our tools in minutes, not hours, days or weeks.”**

Until the next time!
— Ariel

P.S. Subscribe to our [RSS Feed](https://nordhealth.design/feed.xml){rel="[\"nofollow\"]"} to follow the latest updates from Nord team.

<!--
Source: https://nordhealth.design/raw/updates/february-2022-design-system-architecture.md
-->
