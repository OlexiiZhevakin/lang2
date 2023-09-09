const myDataProvider = {
  getList: async (resource: string, params: any) => {
    // здесь вызывайте ваш API для получения списка записей
    const response = await fetch(`/app/[locale]/api/${resource}`);
    const data = await response.json();
    return { data, total: data.length };
  },
  getOne: async (resource: string, params: any) => {
    // здесь вызывайте ваш API для получения одной записи по идентификатору
    const response = await fetch(`/app/[locale]/api/${resource}/${params.id}`);
    const data = await response.json();
    return { data };
  },
  getMany: async (resource: string, params: any) => {
    // здесь вызывайте ваш API для получения списка записей по массиву идентификаторов
    const ids = params.ids.join(',');
    const response = await fetch(`/app/[locale]/api/${resource}?ids=${ids}`);
    const data = await response.json();
    return { data };
  },
  getManyReference: async (resource: string, params: any) => {
    // здесь вызывайте ваш API для получения списка записей по массиву идентификаторов
    const ids = params.ids.join(',');
    const response = await fetch(`/app/[locale]/api/${resource}?ids=${ids}`);
    const data = await response.json();
    return { data };
  },
  update: async (resource: string, params: any) => {
    // здесь вызывайте ваш API для получения списка записей по массиву идентификаторов
    const ids = params.ids.join(',');
    const response = await fetch(`/app/[locale]/api/${resource}?ids=${ids}`);
    const data = await response.json();
    return { data };
  },
  updateMany: async (resource: string, params: any) => {
    // здесь вызывайте ваш API для получения списка записей по массиву идентификаторов
    const ids = params.ids.join(',');
    const response = await fetch(`/app/[locale]/api/${resource}?ids=${ids}`);
    const data = await response.json();
    return { data };
  },
  create: async (resource: string, params: any) => {
    // здесь вызывайте ваш API для получения списка записей по массиву идентификаторов
    const ids = params.ids.join(',');
    const response = await fetch(`/app/[locale]/api/${resource}?ids=${ids}`);
    const data = await response.json();
    return { data };
  },
  delete: async (resource: string, params: any) => {
    // здесь вызывайте ваш API для получения списка записей по массиву идентификаторов
    const ids = params.ids.join(',');
    const response = await fetch(`/app/[locale]/api/${resource}?ids=${ids}`);
    const data = await response.json();
    return { data };
  },
  deleteMany: async (resource: string, params: any) => {
    // здесь вызывайте ваш API для получения списка записей по массиву идентификаторов
    const ids = params.ids.join(',');
    const response = await fetch(`/app/[locale]/api/${resource}?ids=${ids}`);
    const data = await response.json();
    return { data };
  },
  // добавьте другие методы для работы с данными
};

export default myDataProvider;
