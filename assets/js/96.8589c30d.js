(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{949:function(_,v,t){"use strict";t.r(v);var a=t(10),e=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("p",[_._v("Word 这种文本编辑器你平时应该经常用吧，那你有没有留意过它的拼写检查功能呢？一旦我们在 Word 里输入一个错误的英文单词，它就会用标红的方式提示“拼写错误”。Word 的这个单词拼写检查功能，虽然很小但却非常实用。你有没有想过，这个功能是如何实现的呢？")]),_._v(" "),t("p",[_._v("其实啊，一点儿都不难。只要你学完今天的内容，散列表（Hash Table）。你就能像微软 Office 的工程师一样，轻松实现这个功能")]),_._v(" "),t("h2",{attrs:{id:"散列思想"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#散列思想"}},[_._v("#")]),_._v(" 散列思想")]),_._v(" "),t("p",[_._v("散列表的英文叫“Hash Table”，我们平时也叫它“哈希表”或者“Hash 表”，你一定也经常听过它，我在前面的文章里，也不止一次提到过，但是你是不是真的理解这种数据结构呢？")]),_._v(" "),t("p",[_._v("散列表用的是数组支持按照下标随机访问数据的特性，所以散列表其实就是数组的一种扩展，由数组演化而来。可以说，如果没有数组，就没有散列表。")]),_._v(" "),t("p",[_._v("我用一个例子来解释一下。假如我们有 89 名选手参加学校运动会。为了方便记录成绩，每个选手胸前都会贴上自己的参赛号码。这 89 名选手的编号依次是 1 到 89。现在我们希望编程实现这样一个功能，通过编号快速找到对应的选手信息。你会怎么做呢？")]),_._v(" "),t("p",[_._v("我们可以把这 89 名选手的信息放在数组里。编号为 1 的选手，我们放到数组中下标为 1 的位置；编号为 2 的选手，我们放到数组中下标为 2 的位置。以此类推，编号为 k 的选手放到数组中下标为 k 的位置。")]),_._v(" "),t("p",[_._v("因为参赛编号跟数组下标一一对应，当我们需要查询参赛编号为 x 的选手的时候，我们只需要将下标为 x 的数组元素取出来就可以了，时间复杂度就是 O(1)。这样按照编号查找选手信息，效率是不是很高？")]),_._v(" "),t("p",[_._v("实际上，这个例子已经用到了散列的思想。在这个例子里，参赛编号是自然数，并且与数组的下标形成一一映射，所以利用数组支持根据下标随机访问的时候，时间复杂度是 O(1) 这一特性，就可以实现快速查找编号对应的选手信息。")]),_._v(" "),t("p",[_._v("你可能要说了，这个例子中蕴含的散列思想还不够明显，那我来改造一下这个例子。")]),_._v(" "),t("p",[_._v("假设校长说，参赛编号不能设置得这么简单，要加上年级、班级这些更详细的信息，所以我们把编号的规则稍微修改了一下，用 6 位数字来表示。比如 051167，其中，前两位 05 表示年级，中间两位 11 表示班级，最后两位还是原来的编号 1 到 89。这个时候我们该如何存储选手信息，才能够支持通过编号来快速查找选手信息呢？")]),_._v(" "),t("p",[_._v("思路还是跟前面类似。尽管我们不能直接把编号作为数组下标，但我们可以截取参赛编号的后两位作为数组下标，来存取选手信息数据。当通过参赛编号查询选手信息的时候，我们用同样的方法，取参赛编号的后两位，作为数组下标，来读取数组中的数据。")]),_._v(" "),t("p",[_._v("这就是典型的散列思想。其中，参赛选手的编号我们叫作键（key）或者关键字。我们用它来标识一个选手。我们把参赛编号转化为数组下标的映射方法就叫作散列函数（或“Hash 函数”“哈希函数”），而散列函数计算得到的值就叫作散列值（或“Hash 值”“哈希值”）")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2020/07/224.png",alt:""}})]),_._v(" "),t("p",[_._v("通过这个例子，我们可以总结出这样的规律：散列表用的就是数组支持按照下标随机访问的时候，时间复杂度是 O(1) 的特性。我们通过散列函数把元素的键值映射为下标，然后将数据存储在数组中对应下标的位置。当我们按照键值查询元素时，我们用同样的散列函数，将键值转化数组下标，从对应的数组下标的位置取数据。")]),_._v(" "),t("h2",{attrs:{id:"散列函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#散列函数"}},[_._v("#")]),_._v(" 散列函数")]),_._v(" "),t("p",[_._v("从上面的例子我们可以看到，散列函数在散列表中起着非常关键的作用。现在我们就来学习下散列函数。")]),_._v(" "),t("p",[_._v("散列函数，顾名思义，它是一个函数。我们可以把它定义成hash(key)，其中 key 表示元素的键值，hash(key) 的值表示经过散列函数计算得到的散列值。")]),_._v(" "),t("p",[_._v("那第一个例子中，编号就是数组下标，所以 hash(key) 就等于 key。改造后的例子，写成散列函数稍微有点复杂。我用伪代码将它写成函数就是下面这样：")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("int hash(String key) {\n  // 获取后两位字符\n  string lastTwoChars = key.substr(length-2, length);\n  // 将后两位字符转换为整数\n  int hashValue = convert lastTwoChas to int-type;\n  return hashValue;\n}\n")])])]),t("p",[_._v("刚刚举的学校运动会的例子，散列函数比较简单，也比较容易想到。但是，如果参赛选手的编号是随机生成的 6 位数字，又或者用的是 a 到 z 之间的字符串，该如何构造散列函数呢？我总结了三点散列函数设计的基本要求：")]),_._v(" "),t("p",[_._v("散列函数计算得到的散列值是一个非负整数；")]),_._v(" "),t("p",[_._v("如果 key1 = key2，那 hash(key1) == hash(key2)；")]),_._v(" "),t("p",[_._v("如果 key1 ≠ key2，那 hash(key1) ≠ hash(key2)。")]),_._v(" "),t("p",[_._v("我来解释一下这三点。其中，第一点理解起来应该没有任何问题。因为数组下标是从 0 开始的，所以散列函数生成的散列值也要是非负整数。第二点也很好理解。相同的 key，经过散列函数得到的散列值也应该是相同的。")]),_._v(" "),t("p",[_._v("第三点理解起来可能会有问题，我着重说一下。这个要求看起来合情合理，但是在真实的情况下，要想找到一个不同的 key 对应的散列值都不一样的散列函数，几乎是不可能的。即便像业界著名的MD5、SHA、CRC等哈希算法，也无法完全避免这种散列冲突。而且，因为数组的存储空间有限，也会加大散列冲突的概率。")]),_._v(" "),t("p",[_._v("所以我们几乎无法找到一个完美的无冲突的散列函数，即便能找到，付出的时间成本、计算成本也是很大的，所以针对散列冲突问题，我们需要通过其他途径来解决。")]),_._v(" "),t("h2",{attrs:{id:"散列冲突"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#散列冲突"}},[_._v("#")]),_._v(" 散列冲突")]),_._v(" "),t("p",[_._v("再好的散列函数也无法避免散列冲突。那究竟该如何解决散列冲突问题呢？我们常用的散列冲突解决方法有两类，开放寻址法（open addressing）和链表法（chaining）。")]),_._v(" "),t("h3",{attrs:{id:"_1-开放寻址法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-开放寻址法"}},[_._v("#")]),_._v(" 1. 开放寻址法")]),_._v(" "),t("p",[_._v("开放寻址法的核心思想是，如果出现了散列冲突，我们就重新探测一个空闲位置，将其插入。那如何重新探测新的位置呢？我先讲一个比较简单的探测方法，线性探测（Linear Probing）。")]),_._v(" "),t("p",[_._v("当我们往散列表中插入数据时，如果某个数据经过散列函数散列之后，存储位置已经被占用了，我们就从当前位置开始，依次往后查找，看是否有空闲位置，直到找到为止。")]),_._v(" "),t("p",[_._v("我说的可能比较抽象，我举一个例子具体给你说明一下。这里面黄色的色块表示空闲位置，橙色的色块表示已经存储了数据")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2020/07/225.png",alt:""}})]),_._v(" "),t("p",[_._v("从图中可以看出，散列表的大小为 10，在元素 x 插入散列表之前，已经 6 个元素插入到散列表中。x 经过 Hash 算法之后，被散列到位置下标为 7 的位置，但是这个位置已经有数据了，所以就产生了冲突。于是我们就顺序地往后一个一个找，看有没有空闲的位置，遍历到尾部都没有找到空闲的位置，于是我们再从表头开始找，直到找到空闲位置 2，于是将其插入到这个位置。")]),_._v(" "),t("p",[_._v("在散列表中查找元素的过程有点儿类似插入过程。我们通过散列函数求出要查找元素的键值对应的散列值，然后比较数组中下标为散列值的元素和要查找的元素。如果相等，则说明就是我们要找的元素；否则就顺序往后依次查找。如果遍历到数组中的空闲位置，还没有找到，就说明要查找的元素并没有在散列表中")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2020/07/226.png",alt:""}})]),_._v(" "),t("p",[_._v("散列表跟数组一样，不仅支持插入、查找操作，还支持删除操作。对于使用线性探测法解决冲突的散列表，删除操作稍微有些特别。我们不能单纯地把要删除的元素设置为空。这是为什么呢？")]),_._v(" "),t("p",[_._v("还记得我们刚讲的查找操作吗？在查找的时候，一旦我们通过线性探测方法，找到一个空闲位置，我们就可以认定散列表中不存在这个数据。但是，如果这个空闲位置是我们后来删除的，就会导致原来的查找算法失效。本来存在的数据，会被认定为不存在。这个问题如何解决呢？")]),_._v(" "),t("p",[_._v("我们可以将删除的元素，特殊标记为 deleted。当线性探测查找的时候，遇到标记为 deleted 的空间，并不是停下来，而是继续往下探测。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2020/07/227.png",alt:""}})]),_._v(" "),t("p",[_._v("你可能已经发现了，线性探测法其实存在很大问题。当散列表中插入的数据越来越多时，散列冲突发生的可能性就会越来越大，空闲位置会越来越少，线性探测的时间就会越来越久。极端情况下，我们可能需要探测整个散列表，所以最坏情况下的时间复杂度为 O(n)。同理，在删除和查找时，也有可能会线性探测整张散列表，才能找到要查找或者删除的数据。")]),_._v(" "),t("p",[_._v("对于开放寻址冲突解决方法，除了线性探测方法之外，还有另外两种比较经典的探测方法，二次探测（Quadratic probing）和双重散列（Double hashing）。")]),_._v(" "),t("p",[_._v("所谓二次探测，跟线性探测很像，线性探测每次探测的步长是 1，那它探测的下标序列就是 hash(key)+0，hash(key)+1，hash(key)+2……而二次探测探测的步长就变成了原来的“二次方”，也就是说，它探测的下标序列就是 hash(key)+0，hash(key)+12，hash(key)+22……")]),_._v(" "),t("p",[_._v("所谓双重散列，意思就是不仅要使用一个散列函数。我们使用一组散列函数 hash1(key)，hash2(key)，hash3(key)……我们先用第一个散列函数，如果计算得到的存储位置已经被占用，再用第二个散列函数，依次类推，直到找到空闲的存储位置。")]),_._v(" "),t("p",[_._v("不管采用哪种探测方法，当散列表中空闲位置不多的时候，散列冲突的概率就会大大提高。为了尽可能保证散列表的操作效率，一般情况下，我们会尽可能保证散列表中有一定比例的空闲槽位。我们用装载因子（load factor）来表示空位的多少。")]),_._v(" "),t("p",[_._v("装载因子的计算公式是：")]),_._v(" "),t("ul",[t("li",[_._v("散列表的装载因子 = 填入表中的元素个数 / 散列表的长度")]),_._v(" "),t("li",[_._v("装载因子越大，说明空闲位置越少，冲突越多，散列表的性能会下降。")])]),_._v(" "),t("h3",{attrs:{id:"_2-链表法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-链表法"}},[_._v("#")]),_._v(" 2. 链表法")]),_._v(" "),t("p",[_._v("链表法是一种更加常用的散列冲突解决办法，相比开放寻址法，它要简单很多。我们来看这个图，在散列表中，每个“桶（bucket）”或者“槽（slot）”会对应一条链表，所有散列值相同的元素我们都放到相同槽位对应的链表中")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2020/07/228.png",alt:""}})]),_._v(" "),t("p",[_._v("当插入的时候，我们只需要通过散列函数计算出对应的散列槽位，将其插入到对应链表中即可，所以插入的时间复杂度是 O(1)。当查找、删除一个元素时，我们同样通过散列函数计算出对应的槽，然后遍历链表查找或者删除。那查找或删除操作的时间复杂度是多少呢？")]),_._v(" "),t("p",[_._v("实际上，这两个操作的时间复杂度跟链表的长度 k 成正比，也就是 O(k)。对于散列比较均匀的散列函数来说，理论上讲，k=n/m，其中 n 表示散列中数据的个数，m 表示散列表中“槽”的个数。")]),_._v(" "),t("h2",{attrs:{id:"解答开篇"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解答开篇"}},[_._v("#")]),_._v(" 解答开篇")]),_._v(" "),t("p",[_._v("有了前面这些基本知识储备，我们来看一下开篇的思考题：Word 文档中单词拼写检查功能是如何实现的？")]),_._v(" "),t("p",[_._v("常用的英文单词有 20 万个左右，假设单词的平均长度是 10 个字母，平均一个单词占用 10 个字节的内存空间，那 20 万英文单词大约占 2MB 的存储空间，就算放大 10 倍也就是 20MB。对于现在的计算机来说，这个大小完全可以放在内存里面。所以我们可以用散列表来存储整个英文单词词典。")]),_._v(" "),t("p",[_._v("当用户输入某个英文单词时，我们拿用户输入的单词去散列表中查找。如果查到，则说明拼写正确；如果没有查到，则说明拼写可能有误，给予提示。借助散列表这种数据结构，我们就可以轻松实现快速判断是否存在拼写错误。")]),_._v(" "),t("h2",{attrs:{id:"内容小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内容小结"}},[_._v("#")]),_._v(" 内容小结")]),_._v(" "),t("p",[_._v("今天我讲了一些比较基础、比较偏理论的散列表知识，包括散列表的由来、散列函数、散列冲突的解决方法。")]),_._v(" "),t("p",[_._v("散列表来源于数组，它借助散列函数对数组这种数据结构进行扩展，利用的是数组支持按照下标随机访问元素的特性。散列表两个核心问题是散列函数设计和散列冲突解决。散列冲突有两种常用的解决方法，开放寻址法和链表法。散列函数设计的好坏决定了散列冲突的概率，也就决定散列表的性能。")]),_._v(" "),t("p",[_._v("针对散列函数和散列冲突，今天我只讲了一些基础的概念、方法，下一节我会更贴近实战、更加深入探讨这两个问题。")])])}),[],!1,null,null,null);v.default=e.exports}}]);