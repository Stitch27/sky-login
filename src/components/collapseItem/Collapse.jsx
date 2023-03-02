import React from "react"

import { UserIcon, TvIcon, BookOpenIcon } from "@heroicons/react/24/solid"

import { Item } from "./Item"
export const Collapse = () => {
  return (
    <ul className="space-y-6 px-3">
      <Item title="Cuenta" icon={<UserIcon className="h-6 w-6" />} items={
        [
          { name: "Información", link: "/menu/informacion"},
          { name: "Paquetes", link: "/menu/paquetes" },
          { name: "Equipos adicionales", link: "" },
          { name: "Servicio técnico", link: "" },
          { name: "Cambio de domicilio", link: "" },
          { name: "Cambio de titular", link: "" },
          { name: "Reportes", link: "" },
          { name: "Aclaraciones", link: "" }
        ]} />
      <Item title="Televisión" icon={<TvIcon className="h-6 w-6" />} items={[
        { name: "Telecomm inalámbrico", link: "" },
        { name: "Telecomm celular", link: ""}
      ]} />
      <Item title="Otros" icon={<BookOpenIcon className="h-6 w-6" />} items={[
        { name: "Opinión", link: "" },
        { name: "Ayuda", items:[
          {name: "Soporte", link:""},
          {name: "Queja", link:""}
        ]}
      ]} />
    </ul>
  )
}
