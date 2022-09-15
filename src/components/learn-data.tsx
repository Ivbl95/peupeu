export const data = {
    Python: {
        List: [
            {'x = [1, 3, 4]': 'Список, содержащий элементы одного типа данных'},
            {'y = [1, 3.2, \'str\']': 'Список, содержащий элементы различных типов данных'},
            {'len(x)': 'Вернет длину списка'},
            {'x[0]': 'Вернет первый элемент списка'},
            {'x[-1]': 'Вернет последний элемент списка'},
            {'x[1:]': 'Вернет срез строк начиная со второго'},
            {'[1, 3] + [3, 4]': 'Вернет сконкатенированный список'},
            {'x[0] = 5': 'Меняет элемент списка по его индексу'},
            {'x.append(123)': 'Добавляет элемент в конец списка'},
            {'x.pop()': 'Удаляет из списка элемент и Вернет его'},
            {'x.pop(0)': 'Удаление по индексу'},
            {'x.sort()': 'Сортирует по возрастанию, так же для строк'},
            {'x.reverse()': 'Переворачивает список'},
            {'x.insert(1, 22)': 'Вставить элемент 22 по индексу 1 и сдвинуть остальные вперед'},
            {'x.index(22)': 'Вернет индекс элемента(ошибка если элемента нет)'},
            {'[1, 1, 2, 3].count(1)': 'Вернет число повторов элемента'},
            {'a = b.copy()': 'а копирует b'},
            {'a.clear()': 'Удаляет все элементы из списка'},
        ],
        Dict: [
            {'x = { "r": 7, "e": 8 }': 'Пример словаря, ключ + значение'},
            {'x = dict(r=7, e=8)': 'Пример словаря, ключ + значение (другая запись)'},
            {'x[key]': 'Вернет 7 - обращение по ключу'},
            {'x.get(key)': 'Вернет 7 - обращение по ключу (другая запись)'},
            {'x[key] = "+1"': 'Добавляет пару в конец словаря'},
            {'x[key] = "+12"': 'Смена текущего значения'},
            {'list(x.keys())': 'Вернет список из ключей словаря'},
            {'list(x.values())': 'Вернет список из значений словаря'},
            {'sorted(x.keys())': 'Вернет уже отсортированный список'},
            {'key in x': 'Вернет bool значение, есть ли в словаре элемент'},
            {'key not in x': 'Вернет bool значение, нет ли в словаре элемента'},
            {'for k, v in x.items():': 'Перебор ключей и значений'},
            {'del x[key]': 'Удалить элемент'},
            {'x.pop(key)': 'Удалить элемент'},
            {'x.popItem()': 'Вернет последний элемент и его же удалит из словаря'},
            {'len(x)': 'Вернет длину словаря'},
        ],
        OrdDict: [
            {'from collections import OrderedDict': 'Импорт библиотеки'},
            {'b = OrderedDict()': 'Инициализация переменной'},
        ],
        Tuple: [
            {'a = ("1", "2", "3")': 'Объявление tuple'},
            {'a[0] = 4':'Ошибка, элементы кортежа неизменяемы'},
            {'len(a)':'Вернет длину tuple'},
        ],
        NamedTuple: [
            {'from collections import namedtuple': 'Импорт namedtuple'},
            {'Human = namedtuple("Human", "name age eyecolor")':'Определение класса human'},
            {'albert = Human("Albert", "27", "Brown")':'Создание экземпляра класса'},
            {'albert.name': 'Вернет значение свойства name'},
        ],
        Logic: [
            {'if True:': 'Если'},
            {'result = input()': 'Запрос от пользователя'},
            {'elif True:': 'В другом случае, если'},
            {'else:': 'Во всех остальных случаях'},
        ],
        Set: [
            {'x = set()': 'Создать set'},
            {'x.add(1)': 'Добавить элемент'},
            {'set([1,1,2,3])': 'Вернет set из list без дубликатов'},
            {'1 in x': 'Вернет bool, проверка на наличие числа в set'},
            {'{1,2}.issubset({1,2,3})': 'Вернет bool, является ли первый подмножеством второго'},
            {'{1,2,3}.issuperset({1,2})': 'Вернет bool, является ли первый надмножество второго'},
            {'x.isdisjoint(y)': 'Вернет bool, нет ли совпадений, если нет то true'},
            {'a = x.union(y)': 'Вернет новое объединенное множество без дубликатов'},
            {'a = x.intersection(y)': 'Вернет новое множество из совпадающих значений'},
            {'a = x.difference(y)': 'Вернет новое множество, из уникальных значений из левого множества'},
            {'a = x.symmetric_difference(y)': 'Вернет новое множество из уникальных значений левого и правого множеств'},
            {'a = x.update(y)': 'Работает как union, только не возвращает новое, а обновляет левое множество'},
            {'x.remove(1)': 'Удалить элемент, ошибка если элемента нет'},
            {'x.discard(1)': 'Удалить элемент, ошибки нет если элемента нет'},
            {'x.pop()': 'Удаляет случайный элемент и вернет его'},
            {'x.clear()': 'Очистка множества'},
        ],
        For: [
            {'for i in [1,2,3,4]:': 'Каждую итерацию на место i будет подставляться значение из list'},
            {'for i in range(2,5):': '2,3,4 В i будут числа из range от 2 до 5 не включая 5'},
            {'for i, item in enumerate(nums):nums[i] *= 2': 'Умножить все значения в num на 2'},
            {'for l in "Albert":': 'В l будет буква из имени каждую итерацию'},
            {'for _ in range(5):': 'Не используем переменную _, просто 5 итераций'},
            {'for i in ("John", 22):': 'В i будут элементы из tuple'},
            {'for (x, y) in [(5, 4), (7, 9)]:': 'В x и y будут значения из tuple'},
            {'for items in dict(a=5, b=2):': 'Выведет ключи, тоесть буквы a и b'},
            {'for items in dict(a=5, b=2).items():': 'Выведет 2 tuple'},
            {'for k, v in dict(a=5, b=2).items():': 'k будет ключи, v - значение'},
            {'for v in dict(a=5, b=2).values()': 'Итерирование значений 5, 2'},
            {'for i in list1: for y in list2:': 'Вложенный цикл'},
            {'': ''},
        ],
    },
    Js: {
        Variables: [
            {'let a;': 'Объявление переменной'},
            {'a = 5': 'Присвоение значения'},
            {'const b = 7;': 'Неизменяемая переменная'},
            {'b = 15': 'Ошибка, константы неизменяемы'},
            {'let camelCase;': 'Каждое новое слово с большой буквы'},
            {'let ourPlanetName = "Earth"': 'Имя переменной должно описывать что внутри'}
        ],
        DataTypes: [
            {'': ''},
            {'': ''},
            {'': ''},
            {'': ''},
            {'': ''},
            {'': ''},
        ],
    },
    Jest: {
        Expect: [
            {'.toEqual(expect.anything());': 'Не null, не undefined'},
            {'.toEqual(expect.any(Number));': 'Проверка на экземпляр класса'},
            {'.toEqual(expect.arrayContaining([1, 2]));': 'Первый массив содержит второй'},
            {'.toEqual(expect.objectContaining({foo: 111}));': 'Первый объект содержит свойство'},
            {'.toEqual(expect.stringContaining("llo"));': 'Первая строка содержит подстроку'},
            {'.toEqual(expect.stringMatching("hello"));': 'Совпадение строк или с регуляркой'},
            {'.toBeCloseTo(0.3);': 'Убирает проблему сложения десятичных дробей'},
            {'.not': 'opposite of expression'},
            {'.resolve': 'resolve promise before matching'},
            {'.rejects': 'reject promise before matching'},
            {'.toBeCalled()': 'foo was called no less then 1 time'},
            {'.toBeCalledTimes(2)': 'foo was called 2 times'},
            {'.toBeCalledWith(arg1, arg2)': 'foo was called with these args any time'},
            {'.lastCalledWith(arg1, arg2)': 'foo was called with these args last time'},
            {'.nthCalledWith(2, arg)': 'one of times the arg was second'},
            {'.toReturn()': 'foo returned something some time'},
            {'.toReturnWith(111)': 'foo returns 111'},
            {'.lastReturnWith(111)': 'foo returned 111 last time'},
            {'.nthReturnWith(111)': 'foo returned 111 one of times'},
            {'.toHaveLength()': 'to have equal string s of array s length'},
            {'.toHaveProperty(key, value?)': 'is there a key and an optional value'},
            {'.toBeInstanceOf(class)': 'is value to be equal with the class prototype'},
            {'.toContain(1)': 'value into array'},
            {'.toMatch(str)': 'regexp'},
            {'.toThrow()': 'throw mistake'},
            {'.toBe(), .toBeNull(), .toBeUndefined(), .toBeDefined(), .toBeTruthy(), .toBeFalsy(), .toBeNaN()': ''},
        ]
    },
    React: {
        JSX: [
            {'const btn = <button>push</button>': 'Поместить dom элемент в переменную'},
            {'(<div><button>123</button></div>)': 'Многострочный элемент в скобках'},
            {'(<><button>123</button><button>123</button></>)': 'Несколько элементов должны быть обернуты в один'},
            {'<div>{var}</div>': 'Использование переменных внутри тега'},
            {'<p>123</p>; <div>{p}</div>': 'Использование переменных внутри тега'},
            {'<input placeholder={holder} />': 'Использование переменных внутри атрибута'},
            {'<div className="some"></div>': 'Имена классов в className, многострочные атрибуты camelCase'}
        ],
        Props: [
            {'<Some name="Albert" surname="Petr">': 'Give info to a child'},
            {'export interface Props { name: string, surname: string }': 'Interface of input props'},
            {'export default class Some extends Component<Props, {}>': 'Class with an interface'},
            {'const { name, surname } = this.props': 'Get props'},
        ],
        State: [
            {'state = { key: value }': 'Set state'},
            {'const { key } = this.state': 'Get state'},
            {'this.setState((state: any) => ({ key: ++state.key }))': 'Change state value (only arrow functions or bind this)'},
        ],
    },
    Angular: {
        Installing: [
            {'ng new <project-name>': 'Installing a ng project by using cli'},
        ],
        ComponentCreate: [
            {'ng g c <component-name>': 'Creating component with its path in app/'}
        ],
        CreatingManually: [
            {'import { Component } from "@angular/core";': 'Import to use decorator'},
            {'@Component({})': 'Place for metadata of a component'},
            {'selector: "app-component"': 'Selector of a component, using to add comp each detection'},
            {'templateUrl: "./component-overview.component.html"': 'Include external tempate'},
            {'styleUrls: ["./component-overview.component.css"]': 'Include external styles'},
            {'export class AppComponent {}': 'Export class'},
        ],
        LifeCycleHooks: [
            {'export class AppComponent implements OnInit': 'Implement OnInit'},
            {'ngOnInit()': 'Perform heavy logic outside of the constructor'},
            {'': 'The best place to work with start-input data'},
            {'': 'Working once after OnChanges()'},
            {'ngOnDestroy()': 'The place to free resources that wont be garbage-collected automatically'},
            {'': 'Unsubscribe, remove timers'},
            {'': 'Working once before destruct a component'},
            {'ngOnChanges()': 'Working whenever changes in the input properties was detected'},
            {'ngOnChanges(changes: SimpleChanges)': '"Changes" stores data about prev and current values'},
            {'': 'Isnt working when input data is an object && we change object\'s properties'},
            {'': 'Isnt working without input data'},
            {'ngAfterViewInit()': 'Working once after rendering children'},
            {'ngAfterViewChecked()': 'Working each children checking'},
            {'': 'We can get access to children only after first AfterViewInit'},
            {'ngAfterContentInit()': 'Working once after projecting elements to children'},
            {'ngAfterContentChecked()': 'Working each content checking'},
            {'ngDoCheck()': 'Monitor changes that occur where ngOnChanges() won\'t catch them'},
            {'': 'Working each change detection'},
        ],
        ViewIncapsulated: [
            {'ViewEncapsulation.Emulated': 'CSS style influences only on own component'},
            {'ViewEncapsulation.None': 'CSS style influences anywhere'},
            {'_nghost, _ngcontent': 'Angular adds these attributes to create incapsulating'},
        ],
        PassDataToChildByInput: [
            {'<app-child [data]="data"></app-child>': 'Pass data to child'},
            {'@Input() data: \'type\' = basicValue;': 'Get data from parent'},
            {'ngOnChanges(change: SimpleChanges) {}': 'It works each input data changes'},
        ],
        PassDataToParentByOutput: [
            {'<app-child (emitter)="foo($event)></app-child>': 'Get data from child'},
            {'@Output() emitter = new EventEmitter<type>();': 'Create emitter in child'},
            {'this.emitter.emit(data);': 'Pass data to parent foo'},
        ],
        LocalVariable: [

        ],
        ViewChild: [

        ],
    }
}