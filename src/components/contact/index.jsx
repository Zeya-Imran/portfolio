import { Button, Form, Input } from "antd";
import { UserOutlined, MailOutlined } from '@ant-design/icons'
import LayoutSection from "../shared/layout";
import { motion } from 'framer-motion';
import { fadeInAnimation } from '../../animations';
import { MobileOutlined, DownloadOutlined, GithubFilled, LinkedinFilled, TwitterCircleFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";


const Contact = () => {
    const onFinish = (values) => {
        console.log(values);
    }

    return (
        <LayoutSection>
            <h1 className='text-[#1e1e24] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[70%] text-[15vw] montserrat-bold z-0'>Contat</h1>
            <section className="relative flex px-5 md:px-10 gap-10 flex-wrap md:justify-around text-white z-10">
                <motion.div className="md:w-3/12 w-full md:px-10 md:py-20 pt-10 bg-[#2b2b38] flex flex-col gap-5"
                    initial={{x:-300,opactiy:0}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{duration: .5}}
                    viewport={{once:true}}
                
                >
                    <div className=" text-white flex flex-col gap-2 items-center">
                        <h1 className="text-4xl tracking-wide montserrat-semibold">Zeya Imran</h1>
                        <p className="text-sm tracking-wider montserrat-light text-[#eee] px-4 py-2">Full Stack MERN Developer </p>
                        <div className='flex gap-5 mt-2  px-14 py-3'>
                            <Link to="https://www.linkedin.com/in/zeya-imran/"><LinkedinFilled className='text-zinc-500 icon-hover' style={{ fontSize: '24px' }} /></Link>
                            <Link to="https://github.com/Zeya-Imran"><GithubFilled className='text-zinc-500 icon-hover' style={{ fontSize: '24px' }} /></Link>
                            <Link to="https://www.linkedin.com/in/zeya-imran/"><TwitterCircleFilled className='text-zinc-500 icon-hover' style={{ fontSize: '24px' }} /></Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 bg-[#20202a] py-8">
                        <div className="flex items-center px-10 gap-8"><MobileOutlined className='text-zinc-500 icon-hover' style={{ fontSize: '20px' }} /> <p className="text-sm montserrat-light text-[#eee]">+ 91-7635-020-315</p></div>
                        <div className="flex items-center px-10 gap-8"><MailOutlined className='text-zinc-500 icon-hover' style={{ fontSize: '20px' }} /> <p className="text-sm montserrat-light text-[#eee]">khanzeya@gmail.com</p></div>
                        <div className="flex items-center px-10 gap-8"><FaLocationDot className='text-zinc-500 icon-hover' style={{ fontSize: '20px' }} /> <p className="text-sm montserrat-light text-[#eee]">Patna, Bihar (IN)</p></div>
                    </div>
                </motion.div>



                {/* Contact main div */}
                <motion.div
                    className="bg-[#1e1e28]  text-white md:w-6/12 w-full"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInAnimation}
                >
                    <motion.h1 className="text-3xl bg-[#2c2c37] px-6 tracking-wide montserrat-semibold pt-10" variants={fadeInAnimation}>
                        Get in touch
                    </motion.h1>
                    <motion.div
                        className="bg-[#2c2c37] px-5 py-10"
                        variants={fadeInAnimation}
                    >
                        <Form
                            layout="vertical"
                            onFinish={onFinish}
                        >
                            <Form.Item
                                rules={[{ required: true }]}
                            >
                                <Input
                                    className="p-4 custom-colors ant-input"
                                    placeholder="Name"
                                    size="large"
                                    prefix={<UserOutlined className="site-form-item-icon text-white bg-[#20202a]" />}
                                    style={{
                                        backgroundColor: '#24242f',
                                        borderRadius: 0,
                                        border: 0
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                rules={[{ required: true }]}
                            >
                                <Input
                                    className="p-4 custom-colors ant-input"
                                    placeholder="Email"
                                    size="large"
                                    prefix={<MailOutlined className="site-form-item-icon text-white bg-[#20202a]" />}
                                    style={{
                                        backgroundColor: '#24242f',
                                        borderRadius: 0,
                                        border: 0
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                rules={[{ required: true }]}
                            >
                                <Input.TextArea
                                    className="p-4 custom-color"
                                    placeholder="Your message"
                                    size="large"
                                    rows={4}
                                    style={{
                                        backgroundColor: '#24242f',
                                        borderRadius: 0,
                                        border: 0
                                    }}
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    htmlType="submit"
                                    className="bg-[#ffc107]" size="large"
                                    style={{
                                        borderRadius: 0,
                                        border: 0
                                    }}>
                                    SEND MESSAGE
                                </Button>
                            </Form.Item>
                        </Form>
                    </motion.div>
                </motion.div>
            </section>
        </LayoutSection>
    )
}

export default Contact;



