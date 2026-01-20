export class DesignItem {
    image!: string;
    title!: string;
    description!: string;
}

export class DesignSection {
    title!: string;
    subtitle!: string;
    items!: DesignItem[];
}
