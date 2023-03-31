const mangaModel = require("./mangaModel");


const getAllManga = async () => {
    try {
        return mangaModel.find();
    } catch (error) {
        console.log('getAllNews', error);
        throw error;
    }

}



const addNewManga = async (title, author, describe, image, category) => {
    try {
        const manga = {
            title,
            author,
            image,
            describe,
            liked: 0,
            reader: 0,
            category,
            dateCreate: Date.parse(new Date())
        }
        await mangaModel.create(manga)
    } catch (error) {
        console.log('add-new-manga' ,error);
    }
}

const deteteMangabyId = async (id) => {
    try {
       return await mangaModel.findByIdAndDelete(id);
    } catch (error) {
        console.log('detetebyId', error);
    }
}


const getMagaById = async (id) => {
    try {
        let manga = await mangaModel.findById(id);
        return manga;
    } catch (e) {
        console.log('getMangaById', e);
    }
}

module.exports = { getAllManga, addNewManga, deteteMangabyId, getMagaById }

var Data = [
    {
        "id": 1,
        "title": "Tuyển U23 Việt Nam hứng thú trên sân tập của nhà vô địch World Cup 2022",
        "link": "https://nld.com.vn/the-thao/tuyen-u23-viet-nam-hung-thu-tren-san-tap-cua-nha-vo-dich-world-cup-2022-20230319210057845.htm",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "(NLĐO) - Tham dự Doha Cup 2023, tuyển U23 Việt Nam được ban tổ chức bố trí sân tập hiện đại bậc nhất Qatar - nơi đội tuyển Argnetina từng luyện quân trước khi vô địch World Cup 2022 vừa qua",
        "content": "Cầu thủ U23 Việt Nam trầm trồ vì mặt sân quá đẹp ở Qatar đã hội đủ quân số ở Qatar rạng sáng 19-3 và thầy trò HLV Philippe Troussier tỏ ra hào hứng khi được tham quan sân tập Qatar University. Đây là nơi tuyển U23 Việt Nam luyện tập trong thời gian thi đấu Doha Cup 2023 và cũng là địa điểm mà siêu sao Lionel Messi và các đồng đội tuyển Argentina rèn quân trước khi đăng quang World Cup 2022. Bên cạnh mặt sân đạt chuẩn quốc tế, điều kiện thời tiết tại Doha thời điểm hiện tại cũng lý tưởng cho việc tập luyện và thi đấu, với nhiệt độ dao động từ 20 đến 28 độ C. Trở ngại lớn nhất đối với thầy trò ông Troussier ở Qatar là cần sớm thích ứng với việc lệch múi giờ lên đến 4 tiếng so với giờ Việt Nam. Thầy trò HLV Philippe Troussier bước vào buổi tập chuyên môn lúc 21 giờ ngày 19-3 Chưa có sự ổn định về thể trạng sau hành trình di chuyển dài, các tuyển thủ U23 Việt Nam chỉ tập nhẹ, khởi động trong ngày đầu có mặt ở Qatar. Thầy trò HLV Philippe Troussier có buổi tập chuyên môn lúc 21 giờ tối nay (19-3) trước khi bước vào giải đấu. Các trận đấu tại Doha Cup 2023 diễn ra khá muộn, từ 0 giờ đến 3 giờ (giờ Việt Nam). Sở dĩ ban tổ chức lựa chọn khung giờ muộn để tổ chức các trận đấu là do trùng thời điểm tháng lễ Ramadan của người Hồi giáo. Trong tháng lễ này, các tín đồ Hồi giáo chỉ bắt đầu ăn uống sau khi mặt trời lặn. Lịch đấu Doha Cup 2023",
        "pubDate": "2023-03-19 17:49:37",
        "image_url": "https://nld.mediacdn.vn/thumb_w/684/291774122806476800/2023/3/19/vff2233-16792342454661061148091.jpg",
        "source_id": "nld",
        "category": [
            "top"
        ],
        "country": [
            "Vietnam"
        ],
        "language": "Vietnamese"
    },
    {
        "id": 2,
        "title": "Hàng ngàn lượt phương tiện cố tình trốn phí qua trạm BOT quốc lộ 5",
        "link": "https://nld.com.vn/thoi-su/hang-ngan-luot-phuong-tien-co-tinh-tron-phi-qua-tram-bot-quoc-lo-5-20230319170923773.htm",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "(NLĐO) - Các phương tiện cố tình vi phạm về khoảng cách bám đuôi xe trước hoặc trực tiếp tông vào barie để trốn trả phí. Vidifi đã tổ chức ngăn chặn, tuy nhiên do các phương tiện đi trong làn ETC có tốc độ cao, tài xế liều lĩnh, cố tình không chấp hành",
        "content": "Ngày 19-3, thông tin từ Tổng công ty Phát triển hạ tầng và đầu tư tài chính Việt Nam (Vidifi) cho hay vừa có văn bản đề nghị Công ty TNHH Thu phí tự động VETC truy thu phí sử dụng dịch vụ đường bộ đối với 239 phương tiện có hành vi trốn thu phí. Các phương tiện qua trạm BOT trên QL5. Theo thống kê của Vidifi, từ ngày 1-1 đến 6-3, đã có 239 phương tiện với 1.071 lượt xe trốn không trả phí khi đi qua Trạm thu phí số 2 QL5 với số tiền gần 51 triệu đồng. Các hình ảnh vi phạm vẫn đang được Vidifi lưu giữ. Theo lãnh đạo của Vidifi, các phương tiện cố tình vi phạm về khoảng cách bám đuôi xe trước hoặc trực tiếp tông vào barie để trốn trả phí. Vidifi đã tổ chức ngăn chặn, tuy nhiên do các phương tiện đi trong làn ETC có tốc độ cao, tài xế liều lĩnh, cố tình không chấp hành nên việc ngăn chặn rất nguy hiểm. Đối với các xe có tài khoản giao thông, khi kiểm tra có đủ tiền, Vidifi đã thực hiện trừ tiền offline, còn những phương tiện không còn đủ số dư trả phí hoặc chủ phương tiện khóa tài khoản thì hiện nay chưa trừ được. Được biết hiện nay do phần mềm chỉ thực hiện việc truy thu offline được khi tài khoản có đủ số dư.",
        "pubDate": "2023-03-19 17:49:37",
        "image_url": "https://nld.mediacdn.vn/thumb_w/684/291774122806476800/2023/3/19/edit-dsc0044-a53f747added45b48d4956197def84f5-1679220355236916922526.png",
        "source_id": "nld",
        "category": [
            "top"
        ],
        "country": [
            "Vietnam"
        ],
        "language": "Vietnamese"
    },
    {
        "id": 3,
        "title": "Giải futsal HDBank VĐQG 2023: Derby thủ đô bất phân thắng bại",
        "link": "https://nld.com.vn/the-thao/giai-futsal-hdbank-vdqg-2023-derby-thu-do-bat-phan-thang-bai-20230319204025012.htm",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "(NLĐO) - Trận đấu khai mạc Giải futsal HDBank VĐQG 2023 giữa CLB Thái Sơn Bắc và Hà Nội chiều 19-3 đã diễn ra kịch tính với kết quả hòa 2-2. Trong khi đó, nhà cựu vô địch Sanvinest Khánh Hòa thắng đậm ở ngày ra quân",
        "content": "Thái Sơn Bắc và Hà Nội bất phân thắng bại ngày ra quân Giải futsal HDBank VĐQG 2023 Lượt trận đầu tiên Giải futsal HDBank Vô địch quốc gia (VĐQG) 2023 chính thức khởi tranh với hai cặp đấu diễn ra chiều 19-3. Trận derby thủ đô trên sân Cung Điền kinh Mỹ Đình (TP Hà Nội) giữa CLB Thái Sơn Bắc và tân binh Hà Nội diễn biến kịch tính, gay cấn khi 2 đội đều đặt mục tiêu giành chiến thắng ngày mở màn để tạo động lực cho cuộc đua vô địch. Màn đọ sức của 2 đội bóng phía Bắc có kết quả bất phân thất bại. Dù sở hữu nhiều cầu thủ kỳ cựu và triển khai thế trận tấn công sắc bén song Thái Sơn Bắc chưa có sự nhuần nhuyễn trong khâu dứt điểm. Không chỉ tấn công hiệu quả, đội chủ nhà còn bất ngờ bị đối thủ vươn lên dẫn trước đến hai lần. Bản lĩnh cùng kinh nghiệm thi đấu dày dạn đã giúp Thái Sơn Bắc thành công trong việc rượt đuổi tỉ số ngoạn mục và giành lại 1 điểm quý giá trong ngày ra quân mùa giải mới. Đoàn quân HLV Acosta Garcia đã khởi đầu không tốt ở Giải futsal HDBank VĐQG 2023 dù được đánh giá là một trong các ứng viên tranh ngôi vô địch mùa này. Sanvinest Khánh Hòa (áo xanh) thắng dễ ngày ra quân mùa giải mới Diễn ra sau đó cùng ngày, Sanvinest Khánh Hòa đã tận dụng tốt lợi thế sân nhà lẫn kinh nghiệm thi đấu để đánh bại tân binh GFDI Sông Hàn với tỉ số 3-0. Mùa giải 2023 là lần đầu tiên giải futsal VĐQG thi đấu theo thể thức sân nhà - sân khách. Điều này biến khán đài Nhà thi đấu Trường Cao đẳng Sư phạm Trung ương Nha Trang chật kín khán giả đến cổ vũ, tiếp thêm sức mạnh tinh thần cho đội bóng của tân HLV Nguyễn Quốc Đàn. Thắng lợi này giúp cựu vô địch futsal Việt Nam tạm dẫn đầu bảng sau lượt trận sớm vòng 1. Giải đấu sẽ tiếp diễn vào ngày 20-3 với hai màn so tài còn lại của lượt trận khai mạc. Lúc 14 giờ, đương kim vô địch Sahako sẽ hành quân đến sân Nhà thi đấu Thái Sơn Nam (TP HCM) để chạm trán Cao Bằng và CLB Thái Sơn Nam sẽ tiếp đón Tân Hiệp Hưng cũng tại địa điểm này lúc 17 giờ.",
        "pubDate": "2023-03-19 17:49:37",
        "image_url": "https://nld.mediacdn.vn/thumb_w/684/291774122806476800/2023/3/19/tsb-ao-trang-2-2-ha-noi-ao-do-anh-tran-tienjpg-16792328739691329886196.jpg",
        "source_id": "nld",
        "category": [
            "top"
        ],
        "country": [
            "Vietnam"
        ],
        "language": "Vietnamese"
    },
    {
        "id": 4,
        "title": "Báo chí cách mạng phải khơi dậy mạnh mẽ khát vọng Việt Nam phồn vinh, thịnh vượng",
        "link": "https://nld.com.vn/thoi-su/bao-chi-cach-mang-phai-khoi-day-manh-me-khat-vong-viet-nam-phon-vinh-thinh-vuong-20230319172313591.htm",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "(NLĐO) - Phó Thủ tướng Trần Hồng Hà cho rằng báo chí cách mạng Việt Nam phải tiếp tục khơi dậy mạnh mẽ hơn nữa khát vọng Việt Nam phồn vinh, thịnh vượng; mỗi sản phẩm báo chí phải thấm đẫm tính nhân văn, lắng đọng giá trị văn hóa dân tộc, có sức lan tỏa lớn, tạo đồng thuận trong toàn xã hội",
        "content": "Sau 3 ngày diễn ra trong không khí tưng bừng với nhiều hoạt động thiết thực, ý nghĩa, Hội báo toàn quốc 2023 với chủ đề \" cách mạng Việt Nam Đoàn kết - Chuyên nghiệp - Văn hóa - Sáng tạo\" do Hội Nhà báo Việt Nam và UBND TP Hà Nội chủ trì phối hợp với Ban Tuyên giáo Trung ương, Bộ Thông tin và Truyền thông, Bộ Văn hóa - Thể thao và Du lịch tổ chức, đã bế mạc chiều 19-3 tại Bảo tàng Hà Nội. Ban tổ chức khen tặng cho các cơ quan báo chí đoạt giải tại Hội báo toàn quốc 2023 Tại lễ bế mạc, thay mặt Chính phủ, Thủ tướng Chính phủ, Phó Thủ tướng Trần Hồng Hà chúc mừng các đơn vị đã tổ chức thành công Hội Báo toàn quốc, để lại nhiều ấn tượng tốt đẹp trong lòng các nhà báo và công chúng báo chí cả nước. Phó Thủ tướng cho biết chỉ còn hơn 2 năm nữa, báo chí cách mạng Việt Nam sẽ chạm dấu mốc 100 năm. Theo Phó Thủ tướng, báo chí cách mạng Việt Nam đang đứng trước yêu cầu phải tiếp tục khơi dậy mạnh mẽ hơn nữa khát vọng Việt Nam phồn vinh, thịnh vượng. Phó Thủ tướng nhấn mạnh mỗi sản phẩm báo chí phải thấm đẫm tính nhân văn, lắng đọng giá trị văn hóa dân tộc, có sức lan tỏa lớn, tạo đồng thuận trong toàn xã hội, phản ánh sâu sắc hiện thực đổi mới vĩ đại của đất nước, quảng bá các giá trị tốt đẹp của văn hóa, đất nước, con người Việt Nam. Đội ngũ những người làm báo phải vững vàng về bản lĩnh chính trị, tư tưởng, ngày càng hiện đại, chuyên nghiệp và hội nhập quốc tế. Hệ thống báo chí cần phát huy hơn nữa vai trò là công cụ truyền thông sắc bén của Đảng, nhà nước và nhân dân; đồng thời là phương tiện giám sát, phản biện xã hội hiệu quả. Phó Thủ tướng Trần Hồng Hà phát biểu Các cơ quan báo chí, những người làm báo phải quán triệt tinh thần xây dựng nền báo chí, truyền thông chuyên nghiệp, nhân văn và hiện đại, chú trọng nâng cao chất lượng, hiệu quả hoạt động báo chí; kiến tạo không gian, môi trường văn hóa trong hoạt động báo chí. Theo Phó Thủ tướng, báo chí phải thay đổi tư duy và cách làm, trên cơ sở kết hợp giữa nội dung tốt và công nghệ hiện đại để làm chủ nền tảng số, nền tảng truyền thông xã hội. Các cơ quan báo chí phải tập hợp thành một lực lượng thống nhất, có sức ảnh hưởng mạnh mẽ, đóng vai trò dòng chảy chính về thông tin, định hướng dư luận trên không gian mạng. Mỗi sản phẩm báo chí phải bảo đảm yếu tố thẩm mỹ, giáo dục, đề cao tính nhân văn, trở thành hình mẫu trong giao tiếp, ứng xử văn hóa trong cộng đồng, nhất là trên không gian mạng và môi trường số. Phó Thủ tướng đề nghị Hội Nhà báo Việt Nam phải tiên phong trong bồi dưỡng và xây dựng bản lĩnh chính trị cho các nhà báo, hội viên, tạo lập không gian văn hóa trong hoạt động báo chí, từ đó giúp \"chấn chỉnh\" những \"lệch chuẩn\" về đạo đức nghề nghiệp. Trong khuôn khổ Hội báo, Ban tổ chức và Hội đồng Giải thưởng đã chấm và quyết định trao 2 giải A, 4 giải B, 8 giải C, 11 giải Khuyến khích đối với giải Chương trình Phát thanh - Truyền hình Tết ấn tượng; trao 1 giải A, 2 giải B, 3 giải C, 5 giải Khuyến khích đối với giải Giao diện báo điện tử Tết ấn tượng; trao 1 giải A, 5 giải B, 7 giải C, 22 giải khuyến khích đối với giải Bìa báo Tết ấn tượng; trao 2 giải A, 4 giải B, 9 giải C và 24 giải khuyến khích đối với giải gian trưng bày ấn tượng… Và như một nét đẹp truyền thống, sau lễ bế mạc, toàn bộ ấn phẩm tham dự Hội Báo sẽ được trao tặng cho các chiến sĩ hải quân và biên phòng.",
        "pubDate": "2023-03-19 17:49:37",
        "image_url": "https://nld.mediacdn.vn/thumb_w/684/291774122806476800/2023/3/19/3337817212217688903716347260863950907226767n-16792209679131536229226.jpeg",
        "source_id": "nld",
        "category": [
            "top"
        ],
        "country": [
            "Vietnam"
        ],
        "language": "Vietnamese"
    },
    {
        "id": 5,
        "title": "Những lưu ý khi chuẩn hóa thông tin thuê bao di động",
        "link": "https://nld.com.vn/cong-nghe/nhung-luu-y-khi-chuan-hoa-thong-tin-thue-bao-di-dong-20230319173835296.htm",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "(NLĐO)- Theo Cục Viễn thông (Bộ Thông tin - Truyền thông), nhằm phục vụ Đề án 06 của Chính phủ, các nhà mạng đang triển khai việc chuẩn hóa thông tin thuê bao di động của người dùng để trùng khớp với Cơ sở dữ liệu quốc gia về dân cư.",
        "content": "Sau khi đối soát với Cơ sở dữ liệu quốc gia (CSDLQG) về dân cư, các nhà mạng sẽ lọc ra những thuê bao có thông tin chưa trùng khớp và sẽ gửi tin nhắn liên tục trong ít nhất 5 ngày, mỗi ngày ít nhất 1 lần, để yêu cầu khách hàng cụ thể cập nhật dữ liệu thông tin thuê bao (TTTB), hạn chót là ngày 31-3. Khách hàng có thể tải app My VNPT để tự chuẩn hóa thông tin thuê bao VinaPhone Khách hàng có thể đến các điểm giao dịch gần nhất của VinaPhone để được hỗ trợ Chuẩn hóa thông tin thuê bao di động tại nhà mạng MobiFone Chuẩn hóa thông tin tại nhà mạng Viettel Nội dung tin nhắn thông báo qua brandname “VinaPhone”",
        "pubDate": "2023-03-19 17:49:37",
        "image_url": "https://nld.mediacdn.vn/291774122806476800/2023/3/19/info-1-16792218936909539551.jpg",
        "source_id": "nld",
        "category": [
            "top"
        ],
        "country": [
            "Vietnam"
        ],
        "language": "Vietnamese"
    },
    {
        "id": 6,
        "title": "Chuyến bay thường lệ đầu tiên từ Bắc Kinh đến Hà Nội sau 3 năm đại dịch COVID-19",
        "link": "https://nld.com.vn/thoi-su/chuyen-bay-thuong-le-dau-tien-tu-bac-kinh-den-ha-noi-sau-3-nam-dai-dich-covid-19-2023031917525886.htm",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "(NLĐO)- Chiều 19-3, Vietnam Airlines thực hiện chuyến bay thường lệ đầu tiên kết nối Bắc Kinh (Trung Quốc) với Hà Nội sau 3 năm tạm dừng khai thác vì COVID-19.",
        "content": "Hãng tổ chức chào đón hành khách ngay từ sân bay quốc tế Thủ đô , với sự tham dự của lãnh đạo Ủy ban Quản lý vốn nhà nước tại doanh nghiệp, đại diện Đại sứ quán Việt Nam tại Trung Quốc, các cơ quan, doanh nghiệp hai nước và hơn 100 hành khách trên chuyến bay. Các đại biểu cắt băng khai trương mở lại đường bay thẳng thường lệ Bắc Kinh - Hà Nội sau 3 năm tạm dừng khai thác vì COVID-19. Các hành khách trên máy bay được chào đón đặc biệt bởi đại diện các cơ quan ngoại giao, du lịch và đại diện hãng. Hiện nay, Vietnam Airlines khai thác đường bay Hà Nội - Bắc Kinh với tần suất 3 chuyến khứ hồi mỗi tuần và dự kiến tăng thêm từ giữa năm nay. Vietnam Airlines có kế hoạch mở thêm đường bay kết nối với sân bay Đại Hưng, Bắc Kinh. Trung Quốc là một trong những thị trường quốc tế lớn nhất của hàng không Việt Nam. Hiện nay, Vietnam Airlines đã nối lại hầu hết đường bay tới các điểm đến ở Trung Quốc, bao gồm giữa Hà Nội, TP HCM và Quảng Châu, Thượng Hải; giữa Hà Nội và Bắc Kinh. Trong các tháng tới, Vietnam Airlines sẽ mở lại 4 đường bay là giữa Đà Nẵng và Quảng Châu, Thượng Hải, Thành Đô; giữa Hà Nội và Thành Đô, cũng như tăng cường đưa máy bay thân rộng Airbus A350 và Boeing 787 vào khai thác trên đường bay Trung Quốc. Các hành khách của chuyến bay thường lệ đầu tiên kết nối Bắc Kinh (Trung Quốc) với Hà Nội sau 3 năm tạm dừng khai thác vì COVID-19. Ảnh: Vũ Tuấn Còn Vietjet cho biết đã chuẩn bị tất cả các nguồn lực khai thác, thương mại… sẵn sàng nối lại nhanh chóng các đường bay du lịch giữa Việt Nam và Trung Quốc. Bên cạnh các đường bay kết nối Việt Nam với Thượng Hải, Thâm Quyến, Hàng Châu mà hãng đang khai thác, dự kiến từ cuối tháng 3, đầu tháng 4 hãng cũng sẽ khai thác trở lại các đường bay đến với Thiên Tân, Trương Gia Giới, Thành Đô... Vietjet dự kiến sẽ khôi phục thêm các đường bay khác ngay trước giai đoạn cao điểm hè để đáp ứng nhu cầu thực tế của người dân, du khách. Đồng thời, Vietjet Air có kế hoạch tăng tần số các chuyến charter từ Trung Quốc đến Cam Ranh lên 20 chuyến trong giai đoạn cuối tháng 3. Bamboo Airways tiếp tục khai thác các chuyến bay thẳng kết nối Hà Nội với Thiên Tân với tần suất 1 chuyến/tuần. Vietravel Airlines cũng cho biết đã liên kết cùng công ty du lịch Vietravel ký hợp đồng thỏa thuận với một số đối tác để thực hiện các chuyến bay thuê chuyến (charter) kết nối một số thành phố lớn của Trung Quốc với TP Nha Trang (Khánh Hòa): Hàng Châu - Cam Ranh, Thường Châu - Cam Ranh, Côn Minh - Cam Ranh. Việc khôi phục các đường bay sẽ tạo thuận lợi rất lớn cho quá trình phục hồi du lịch, thương mại, đầu tư giữa Việt Nam và Trung Quốc sau đại dịch, cũng như góp phần thực hiện thành công các mục tiêu về đón du khách quốc tế của Việt Nam năm 2023. Vừa qua, Vietnam Airlines cũng phối hợp cùng các cơ quan ngoại giao, du lịch, các tập đoàn hàng đầu trong lĩnh vực lữ hành, khách sạn để đồng tổ chức hội thảo giới thiệu điểm đến, lịch bay và phát động bán tại Bắc Kinh, Quảng Châu và Thượng Hải.",
        "pubDate": "2023-03-19 17:49:37",
        "image_url": "https://photo-baomoi.bmcdn.me/w700_r16x9/2023_03_20_65_45326278/59cf3a6e3823d17d8832.jpg",
        "source_id": "nld",
        "category": [
            "top"
        ],
        "country": [
            "Vietnam"
        ],
        "language": "Vietnamese"
    },
    {
        "id": 7,
        "title": "Huy động các bệnh viện lớn cứu bệnh nhân ngộ độc cá chép muối ủ chua ở Quảng Nam",
        "link": "https://nld.com.vn/suc-khoe/huy-dong-cac-benh-vien-lon-cuu-benh-nhan-ngo-doc-ca-chep-muoi-u-chua-o-quang-nam-20230319204222512.htm",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "(NLĐO) - Bệnh viện Chợ Rẫy (TP HCM) đã cử đội chuyên môn đến điều trị người bệnh, cùng đó Bệnh viện Bạch Mai (Hà Nội) hỗ trợ từ xa các trường hợp ngộ độc sau ăn cá chép muối ủ chua",
        "content": "Tối 19-3, PGS-TS Lương Ngọc Khuê, Cục trưởng Cục Quản lý khám chữa bệnh (Bộ Y tế) đã ký công văn gửi Bệnh viện Chợ Rẫy, Sở Y tế tỉnh Quảng Nam về việc cứu chữa bệnh nhân ngộ độc đang điều trị tại Bệnh viện đa khoa khu vực miền núi phía Bắc Quảng Nam. PGS Lương Ngọc Khuê cho biết sau khi nhận được thông tin về 10 trường hợp người dân sau khi ăn cá chép muối ủ chua đã xuất hiện tình trạng ngộ độc và được cấp cứu, điều trị tại Bệnh viện đa khoa khu vực miền núi phía Bắc Quảng Nam, để phối hợp với bệnh viện cấp cứu, điều trị bệnh nhân, Bệnh viện Chợ Rẫy đã cử đội chuyên môn đến hỗ trợ đến trực tiếp tại bệnh viện này. Bác sĩ Bệnh viện Chợ Rẫy mang thuốc giải đến cứu người ngộ độc. Ảnh: N.Thạnh Cùng đó, Bệnh viện Bạch Mai hỗ trợ từ xa và Viện Pasteur Nha Trang đã tìm hiểu nguyên nhân dịch tễ các trường hợp ngộ độc sau ăn cá chép muối ủ chua. Để tiếp tục cứu chữa, tìm nguyên nhân và phòng, chống ngộ độc, Cục Quản lý khám, chữa bệnh đề nghị Bệnh viện Chợ Rẫy và Sở Y tế tỉnh Quảng Nam tiếp tục chỉ đạo Bệnh viện đa khoa khu vực miền núi Bắc Quảng Nam và các cơ sở y tế trên địa bàn tập trung mọi nguồn lực, nỗ lực, phối hợp tiếp tục cứu chữa người bệnh, tìm hiểu nguyên nhân. Trong trường hợp cần huy động sự hỗ trợ chuyên môn của các bệnh viện khác, Bộ Y tế sẽ huy động các bệnh viện hỗ trợ. Đề nghị Sở Y tế tỉnh Quảng Nam chỉ đạo các cơ quan, đơn vị liên quan tăng cường truyền thông, nâng cao nhận thức, khuyến cáo cho người dân, cộng đồng về đảm bảo an toàn vệ sinh thực phẩm, tránh các trường hợp tương tự xẩy ra trên địa bàn. Đặc biệt, truyền thông để người dân biết được các thông tin về ngộ độc Botulium theo hướng dẫn tạm thời chẩn đoán, điều trị ngộ độc Botulium của Bộ Y tế như loại thực phẩm gây ngộ độc, cách sử dụng thực phẩm để loại bỏ độc tố, các dấu hiệu nghi ngờ để đến khám tại các cơ sở khám, chữa bệnh... Chiều 19-3, Sở Y tế tỉnh Quảng Nam đã có báo cáo ban đầu về 2 vụ ngộ độc thực phẩm xảy ra tại huyện Phước Sơn. Cả 2 vụ đều liên quan đến việc người dân ăn món cá chép muối ủ chua. Kết quả kiểm nghiệm xác định, mẫu món cá chép ủ chua dương tính với vi khuẩn Clostridium botulinum type E. Độc tố botulinum là cực độc. Độc tố này chưa đến 0,1mg đã có thể gây tử vong, có thể coi là một trong các chất độc độc nhất hiện nay. Trước đó, các bác sĩ của Bệnh viện Chợ Rẫy đã cử chuyên gia mang 5 lọ thuốc giải độc (mỗi lọ trị giá hơn 6.000 USD) đến Bệnh viện đa khoa Khu vực miền núi phía Bắc Quảng Nam hỗ trợ điều trị cho bệnh nhân. Bệnh viện cũng đã đề nghị Sở Y tế Quảng Nam tăng cường nhân lực, máy thở dành cho người lớn và trẻ em cũng như liên lạc với Bộ Y tế tìm thuốc giải độc cho bệnh nhân.",
        "pubDate": "2023-03-19 17:49:37",
        "image_url": "https://nld.mediacdn.vn/thumb_w/684/291774122806476800/2023/3/19/edit-310d3769b29d6fc3368c-16792146555081666360353.png",
        "source_id": "nld",
        "category": [
            "top"
        ],
        "country": [
            "Vietnam"
        ],
        "language": "Vietnamese"
    },
    {
        "id": 8,
        "title": "Nguyên tắc cấp giấy chứng nhận nghỉ việc hưởng BHXH",
        "link": "https://nld.com.vn/cong-doan/nguyen-tac-cap-giay-chung-nhan-nghi-viec-huong-bhxh-20230319201538996.htm",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "TRƯƠNG QUANG QUÝ (tỉnh Bình Dương) hỏi: \"Việc cấp giấy chứng nhận (GCN) nghỉ việc hưởng BHXH hiện nay có gì khác trước?\".",
        "content": "Luật sư ĐẶNG ANH ĐỨC, Đoàn Luật sư TP Hà Nội, trả lời: Câu hỏi của ông được nêu rõ tại Thông tư 18/2022/TT-BYT ngày 31-12-2022 sửa đổi Thông tư 56/2017/TT-BYT quy định chi tiết thi hành Luật BHXH và Luật An toàn - vệ sinh lao động thuộc lĩnh vực y tế. Theo đó, nguyên tắc cấp GCN nghỉ việc quy định như sau: Một lần khám chỉ được cấp một GCN. Trường hợp người bệnh cần nghỉ dài hơn 30 ngày thì khi hết hoặc sắp hết thời hạn nghỉ ghi trên GCN đã được cấp, người bệnh phải tiến hành tái khám để người hành nghề xem xét quyết định. Trường hợp người lao động trong cùng một thời gian được 2 chuyên khoa trở lên của các cơ sở khám chữa bệnh khác nhau khám và cùng được cấp GCN thì chỉ được hưởng một trong những GCN có thời gian nghỉ dài nhất. Trường hợp người lao động khám nhiều chuyên khoa trong cùng một ngày tại cùng một cơ sở khám chữa bệnh với nhiều bệnh khác nhau thì chỉ cấp một GCN và được giải quyết hưởng chế độ BHXH đối với bệnh có chế độ cao nhất (quy định mới bổ sung).",
        "pubDate": "2023-03-19 17:49:37",
        "image_url": "https://nld.mediacdn.vn/thumb_w/684/291774122806476800/2023/3/19/791dcf6cd89805c65c89-16792088128541588240734.jpg",
        "source_id": "nld",
        "category": [
            "top"
        ],
        "country": [
            "Vietnam"
        ],
        "language": "Vietnamese"
    },
    {
        "id": 9,
        "title": "Khách hàng mất 46,9 tỉ đồng ở Sacombank đề nghị rút 25 tỉ đồng",
        "link": "https://nld.com.vn/thoi-su/khach-hang-mat-469-ti-dong-o-sacombank-de-nghi-rut-25-ti-dong-20230319183143357.htm",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "(NLĐO)- Bà Hồ Thị Thùy Dương đề nghị ngày 21-3, phía Sacombank trả 25 tỉ đồng từ tài khoản của bà; còn 21,9 tỉ đồng, bà đề nghị mở một sổ tiết kiệm mang tên mình với thời hạn 4 tháng",
        "content": "Ngày 19-3, bà Hồ Thị Thùy Dương (ngụ TP Cam Ranh, tỉnh Khánh Hòa) cho biết đã đề nghị Ngân hàng TMCP Sài Gòn Thương Tín (Sacombank) cho rút 25 tỉ đồng thuộc số tiền 46,9 tỉ đồng trong tài khoản của bà mở tại Phòng Giao dịch Cam Ranh - Sacombank Khánh Hòa. Theo bà Dương, luật sư Nguyễn Văn Trình, Trưởng ban Pháp chế được ủy quyền, đã gọi điện đề nghị bà thương lượng, giải quyết vụ mất 46,9 tỉ đồng sau khi bà gửi đơn cầu cứu lên Bộ Công an. Ông Trình đề nghị bà có đơn để ngân hàng giải quyết theo nguyện vọng. Sau đó, bà Dương có đơn đề nghị ngày 21-3, phía ngân hàng trả 25 tỉ đồng từ tài khoản của bà. Còn 21,9 tỉ đồng, bà đề nghị mở một sổ tiết kiệm tại Sacombank mang tên Hồ Thị Thùy Dương, với thời hạn 4 tháng. Đến thời hạn rút tiền đề nghị, ngân hàng hoàn trả gốc và lãi theo quy định kể từ ngày bị tạm giữ số tiền trên. Bà Hồ Thị Thùy Dương đã có đơn gởi Bộ Công an Một lãnh đạo chi nhánh Sacombank Khánh Hòa xác nhận Phòng Giao dịch Sacombank Cam Ranh đã nhận được giấy đề nghị rút tiền của bà Dương. Trong khi đó, theo thông cáo báo chí hôm 17-3, Sacombank cho rằng bà Dương cung cấp thông tin một chiều, chưa đầy đủ và phản ánh không đúng bản chất sự việc. Kiểm tra hồ sơ, ngân hàng này phát hiện có bằng chứng vay mượn, hợp tác làm ăn ngoài xã hội giữa bà Dương và một số cá nhân nguyên là cán bộ, nhân viên Phòng Giao dịch Cam Ranh trong nhiều năm. Đối với 12 giao dịch mà bà Dương tố bị mất tiền, Sacombank khẳng định có đầy đủ chứng từ có chữ ký nhận tiền của bà Dương, bao gồm 9 phiếu nhận tiền mặt và 3 ủy nhiệm chi. Các tài liệu này đã được Sacombank chuyển giao cho Cơ quan CSĐT Công an tỉnh Khánh Hòa. Phòng giao dịch Ngân hàng TMCP Sài Gòn Thương tín (Sacombank) Cam Ranh bị người dân vây kín - ảnh cắt từ clip người dân từ tháng 11-2022 Như Báo đã phản ánh, tháng 5-2022, bà Dương phát hiện tài khoản của mình tại Phòng Giao dịch Sacombank Cam Ranh bị mất tiền và đề nghị ngân hàng trích lục sao kê. Kết quả, có tổng cộng 12 giao dịch (9 giao dịch rút tiền mặt và 3 giao dịch chuyển khoản) diễn ra từ ngày 4-5 đến 14-6-2022, với số tiền 46,9 tỉ đồng. Tất cả giao dịch đều diễn ra trong khoảng thời gian từ 18 đến 21 giờ, ngoài giờ hành chính. Bà Dương khẳng định không ủy quyền hoặc cho ai thay mặt mình để thực hiện các giao dịch này. Do phía Sacombank không thực hiện việc trả lại tiền nên bà Dương đã gửi đơn kêu cứu đến Ngân hàng Nhà nước và Cơ quan CSĐT tội phạm về tham nhũng, kinh tế, buôn lậu (C03 - Bộ Công an). Trước đó, tháng 11-2022, Cơ quan CSĐT Công an tỉnh Khánh Hòa đã khởi tố bị can, bắt tạm giam bà Nguyễn Thị Thanh Hà (47 tuổi, nguyên Phó phòng Giao dịch Sacombank Cam Ranh) và bà Ngô Thị Hồng Nhạn (41 tuổi, nguyên thủ quỹ Phòng Giao dịch Sacombank Cam Ranh) để điều tra về tội tham ô tài sản. Cùng bị khởi tố về tội danh trên nhưng được cho tại ngoại là Nguyễn Trà My (23 tuổi) và Ngô Nữ Hồng Hải (47 tuổi), nguyên giao dịch viên Phòng Giao dịch Sacombank Cam Ranh. Kết quả điều tra bước đầu xác định từ tháng 8-2022, do cần tiền, Nguyễn Thị Thanh Hà đã tự ý sử dụng thông tin khách hàng (số tài khoản, số thẻ tiết kiệm) và nhiều lần chỉ đạo Ngô Thị Hồng Nhạn, Nguyễn Trà My, Ngô Nữ Hồng Hải làm hồ sơ tín dụng khống (vay tiền với tài sản đảm bảo là các thẻ tiết kiệm của khách hàng), mục đích để làm chứng từ khống tất toán và rút tiền từ thẻ tiết kiệm của khách hàng. Qua đó, các bị can này chiếm đoạt số tiền lớn của ngân hàng và khách hàng.",
        "pubDate": "2023-03-19 17:49:37",
        "image_url": "https://nld.mediacdn.vn/thumb_w/684/291774122806476800/2023/3/19/binh-dien1-1665961792106147375245-16791931142121520724661.jpg",
        "source_id": "nld",
        "category": [
            "top"
        ],
        "country": [
            "Vietnam"
        ],
        "language": "Vietnamese"
    },
    {
        "id": 10,
        "title": "Thí sinh đăng ký nguyện vọng theo ngành",
        "link": "https://nld.com.vn/giao-duc-khoa-hoc/thi-sinh-dang-ky-nguyen-vong-theo-nganh-20230319170659823.htm",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "(NLĐO) - Bộ GD-ĐT tránh cho thí sinh bị nhầm lẫn khi phải đăng ký nguyện vọng vào nhiều tổ hợp, phương thức xét tuyển khác nhau",
        "content": "Tại Ngày hội tư vấn tuyển sinh - hướng nghiệp năm 2023 do Báo Tuổi trẻ, Bộ GD-ĐT, Bộ LĐ-TB-XH phối hợp tổ chức ngày 19-3 tại ĐH Bách khoa Hà Nội, PGS-TS Nguyễn Thu Thủy, Vụ trưởng Vụ Giáo dục ĐH, Bộ GD-ĐT, cho hay điểm mới của tuyển sinh năm nay là thí sinh chỉ cần đăng ký nguyện vọng theo ngành. Điều chỉnh này của Bộ GD-ĐT tránh cho thí sinh không bị nhầm lẫn khi phải đăng ký nguyện vọng vào nhiều tổ hợp, phương thức xét tuyển khác nhau. PGS-TS Nguyễn Thu Thủy, Vụ trưởng Vụ Giáo dục ĐH, Bộ GD-ĐT, cho hay năm nay là thí sinh chỉ cần đăng ký nguyện vọng theo ngành Ví dụ, thí sinh muốn đăng ký vào ngành công nghệ thông tin, thì chỉ cần đăng ký mã ngành, trường mà không cần đăng ký tổ hợp, phương thức xét tuyển. Thí sinh chỉ cần nhập lên hệ thống các minh chứng cần thiết (ngoài dữ liệu điểm THPT và kết quả thi tốt nghiệp THPT được Bộ GD-ĐT cập nhật sẵn). Phần mềm sẽ xử lý để xác nhận thí sinh trúng tuyển vào một nguyện vọng được xếp ưu tiên cao nhất mà thí sinh đủ điều kiện đỗ. Thí sinh sau khi đăng ký xét tuyển sớm vẫn phải đăng ký nguyện vọng xét tuyển và các minh chứng để xét tuyển cần thiết lên hệ thống xét tuyển của Bộ GD-ĐT theo thứ tự ưu tiên từ cao xuống thấp (cao nhất là nguyện vọng 1). Khi đã trúng tuyển nguyện vọng 1, thí sinh sẽ không được xét tiếp nguyện vọng 2, 3. Đây là quy định để thí sinh có khả năng trúng tuyển vào nguyện vọng mình yêu thích nhất. Vụ trưởng Vụ Giáo dục đại học nói thêm việc xét tuyển sẽ công bằng với tất cả các nguyện vọng. Hệ thống sẽ xử lý để thí sinh trúng tuyển với nguyện vọng xếp ưu tiên cao nhất trong số các nguyện vọng thí sinh đủ điều kiện. Thí sinh phải tham gia sơ tuyển, đạt đủ tiêu chuẩn theo quy định của Bộ Quốc phòng mới được xét tuyển vào trường quân đội Thượng tá Đỗ Thành Tâm, Thư ký Ban Tuyển sinh quân sự của Bộ Quốc phòng, cho hay năm nay các trường quân đội sẽ xét tuyển bằng điểm thi tốt nghiệp THPT, xét tuyển thẳng thí sinh theo quy định của Bộ GD-ĐT và dành 5% chỉ tiêu ưu tiên xét tuyển học bạ kết hợp chứng chỉ quốc tế hoặc giải cấp tỉnh trở lên. Đăng ký vào trường quân đội, tất cả thí sinh phải tham gia sơ tuyển, đạt đủ tiêu chuẩn theo quy định của Bộ Quốc phòng mới được xét tuyển. Thời gian sơ tuyển dự kiến được thực hiện từ cuối tháng 3, hoàn thành trước ngày 20-5. Theo quy định của Bộ Quốc phòng, để được đăng ký dự tuyển, các thí sinh phải đáp ứng đủ điều kiện tiêu chuẩn về độ tuổi, lý lịch chính trị và sức khỏe. Thí sinh ngoài quân đội phải trong độ tuổi từ 17 đến 21. Quân nhân tại ngũ, đã xuất ngũ và công dân hoàn thành nghĩa vụ tham gia công an nhân dân từ 18 đến 23 tuổi. Ban Chỉ huy quân sự quận, huyện, thị xã sẽ tổ chức khám sức khỏe và kết luận các em có đủ tiêu chuẩn dự tuyển hay không. Mỗi trường sẽ công bố quy định riêng về tiêu chuẩn sức khỏe, tuy nhiên, thí sinh phải đạt sức khỏe loại 1 và loại 2. Năm 2023, các trường quân đội tuyển hơn 4.300 chỉ tiêu. Trong đó, 4 trường quân đội tuyển học viên nữ gồm Học viện Quân y, Học viện Kỹ thuật quân sự, Học viện Hậu cần và Học viện Khoa học quân sự. Cụ thể, tuyển 342 chỉ tiêu nam và nữ trên phạm vi cả nước. Ngành Y khoa (bác sĩ đa khoa) tuyển 20 thí sinh nữ thường trú tại phía bắc, 10 thí sinh nữ thường trú tại phía nam (tổ hợp xét tuyển B00, A00). Đối với ngành Dược, Học viện Quân y tuyển một thí sinh nữ có nơi thường trú phía bắc và một thí sinh nữ có nơi thường trú phía nam (tổ hợp xét tuyển A00). tuyển 458 chỉ tiêu nam và nữ trên phạm vi cả nước. Tuy nhiên, trường chỉ tuyển 13 chỉ tiêu nữ thường trú phía bắc và 7 chỉ tiêu nữ cho thí sinh thường trú tại phía nam. Năm 2023, ngành tuyển nữ của là Hậu cần quân sự, tuyển 3 thí sinh nữ có nơi thường trú phía bắc, một thí sinh nữ có nơi thường trú phía nam (tổ hợp xét tuyển A00, A01). tuyển 90 chỉ tiêu. Trong đó, các ngành Ngôn ngữ Anh, Ngôn ngữ Nga, Ngôn ngữ Trung Quốc, Quan hệ Quốc tế tuyển mỗi ngành 2 thí sinh nữ.",
        "pubDate": "2023-03-19 17:49:37",
        "image_url": "https://nld.mediacdn.vn/thumb_w/684/291774122806476800/2023/3/17/dsc1498-16790964297372019183574.jpg",
        "source_id": "nld",
        "category": [
            "top"
        ],
        "country": [
            "Vietnam"
        ],
        "language": "Vietnamese"
    }
]