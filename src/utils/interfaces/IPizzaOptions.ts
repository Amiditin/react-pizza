interface IPizzaDefoultOptions {
  id: number;
  name: string;
}

interface IPizzaCategory extends IPizzaDefoultOptions {}

interface IPizzaType extends IPizzaDefoultOptions {}

interface IPizzaFilters extends IPizzaDefoultOptions {
  title: string;
}

export type { IPizzaCategory, IPizzaType, IPizzaFilters };
