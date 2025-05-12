import { Children } from "react";

export default function Section ({title, Children, ...props})  {
    return(
        <section {...props}>
          <h2>{title}</h2>
          {Children}
        </section>
    )
}