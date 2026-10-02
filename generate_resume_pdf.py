import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def generate_resume(output_path):
    # Page setup with 36pt (0.5 inch) margins for perfect single-page layout
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=32,
        bottomMargin=32
    )

    styles = getSampleStyleSheet()
    
    # Custom Typography Styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=21,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#000000')
    )

    subtitle_style = ParagraphStyle(
        'DocSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#222222')
    )

    contact_style = ParagraphStyle(
        'DocContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#222222')
    )

    sec_heading_style = ParagraphStyle(
        'SecHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=13,
        textColor=colors.HexColor('#000000'),
        spaceBefore=5,
        spaceAfter=1
    )

    body_bold = ParagraphStyle(
        'BodyBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=11.5,
        textColor=colors.HexColor('#000000')
    )

    body_regular = ParagraphStyle(
        'BodyReg',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.8,
        leading=11.5,
        textColor=colors.HexColor('#222222')
    )

    body_italic = ParagraphStyle(
        'BodyItalic',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.8,
        leading=11.5,
        textColor=colors.HexColor('#333333')
    )

    body_right = ParagraphStyle(
        'BodyRight',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.8,
        leading=11.5,
        alignment=TA_RIGHT,
        textColor=colors.HexColor('#000000')
    )

    bullet_style = ParagraphStyle(
        'BulletItem',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.6,
        leading=11.2,
        leftIndent=12,
        firstLineIndent=-8,
        textColor=colors.HexColor('#222222'),
        spaceBefore=1,
        spaceAfter=1
    )

    story = []

    def add_section_divider(title):
        story.append(Paragraph(title, sec_heading_style))
        story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor('#000000'), spaceBefore=1, spaceAfter=4))

    # --- Header ---
    story.append(Paragraph("<b>Rahul Chaurasiya</b>", title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Pari Chowk, Greater Noida, UP, India", subtitle_style))
    story.append(Spacer(1, 2))
    contact_line1 = (
        '<a href="mailto:rahulteam320@gmail.com"><u>rahulteam320@gmail.com</u></a> | '
        '+91 7007936109 | '
        'GitHub: <a href="https://github.com/Rahulchaurasiya"><u>github.com/Rahulchaurasiya</u></a> | '
        'GFG: <a href="https://www.geeksforgeeks.org"><u>rahulchaurasiya</u></a> | '
        'LeetCode'
    )
    story.append(Paragraph(contact_line1, contact_style))
    
    contact_line2 = (
        'HackerRank: <a href="https://www.hackerrank.com/profile/rahulchaurasiya"><u>@rahulchaurasiya</u></a> | '
        'LinkedIn: <a href="https://linkedin.com/in/rahulchaurasiya/"><u>rahulchaurasiya-7256b6312/</u></a>'
    )
    story.append(Paragraph(contact_line2, contact_style))
    story.append(Spacer(1, 3))

    # --- Professional Summary ---
    add_section_divider("Professional Summary")
    story.append(Paragraph(
        "CSE (AI) student skilled in Java, DSA, MySQL, DBMS, and Backend Development. Passionate about problem-solving, teamwork, leadership, and building innovative software solutions.",
        body_regular
    ))
    story.append(Spacer(1, 3))

    # --- Education ---
    add_section_divider("Education")
    edu_table_data = [
        [
            Paragraph("<b>Dr. A.P.J. Abdul Kalam Technical University, (GNIOT)</b>", body_bold),
            Paragraph("<b>2024–2028</b>", body_right)
        ],
        [
            Paragraph("Computer Science Engineering, Artificial Intelligence B.tech <b>8.0 GPA</b>", body_regular),
            Paragraph("", body_right)
        ]
    ]
    t_edu = Table(edu_table_data, colWidths=[420, 120])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_edu)
    story.append(Paragraph("<b>Activities:</b> Sports, Problem Solving, Computer Science, Project Management, Learner", body_regular))
    story.append(Spacer(1, 3))

    # --- Skills ---
    add_section_divider("Skills")
    story.append(Paragraph("<b>Expert:</b> Java, Python, C, C++, Git/Terminal, VSCode/IntelliJ, GitHub, EDA(basic)", body_regular))
    story.append(Paragraph("<b>Proficient:</b> C, SQL, HTML (Liquid), CSS, JavaScript (React), Excel, MongoDB", body_regular))
    story.append(Spacer(1, 3))

    # --- Projects ---
    add_section_divider("Projects")
    
    # Project 1
    p1_header = [
        [
            Paragraph("<b>AI-Based Scrap Management System</b> &nbsp; <i>Tech Stack: MySQL, HTML, CSS, JavaScript, MongoDB, ThunderAPI</i>", body_bold),
            Paragraph("<b>June 2026 - Present</b>", body_right)
        ],
        [
            Paragraph('<a href="https://github.com/Rahulchaurasiya-11/Hindalco-AI-Scrap-Management-System"><u>github.com/Rahulchaurasiya-11/Hindalco-AI-Scrap-Management-System</u></a>', body_italic),
            Paragraph("", body_right)
        ]
    ]
    t_p1 = Table(p1_header, colWidths=[420, 120])
    t_p1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_p1)
    story.append(Paragraph("– Developed an AI-Based Scrap Management System for industrial scrap tracking and inventory management.", bullet_style))
    story.append(Paragraph("– Implemented scrap categorization, inventory monitoring, recycling management, and reporting modules.", bullet_style))
    story.append(Spacer(1, 2))

    # Project 2
    p2_header = [
        [
            Paragraph("<b>Hand Gesture Recognition System</b> &nbsp; <i>Using OpenCV, Python, MediaPipe</i>", body_bold),
            Paragraph("<b>September 2025 - Past</b>", body_right)
        ],
        [
            Paragraph('<a href="https://github.com/Rahulchaurasiya-11/Hand-Gesture-Detection-Using-CV"><u>github.com/Rahulchaurasiya-11/Hand-Gesture-Detection-Using-CV</u></a>', body_italic),
            Paragraph("", body_right)
        ]
    ]
    t_p2 = Table(p2_header, colWidths=[420, 120])
    t_p2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_p2)
    story.append(Paragraph("– Developed a real-time hand gesture recognition system using computer vision techniques.", bullet_style))
    story.append(Paragraph("– Implemented gesture detection and tracking using MediaPipe and OpenCV.", bullet_style))
    story.append(Spacer(1, 3))

    # --- Experience ---
    add_section_divider("Experience")
    
    # Exp 1: FutureSkillsPrime
    e1_header = [
        [
            Paragraph("<b>FutureSkillsPrime</b>", body_bold),
            Paragraph("<b>Jun 2026–September 2026</b>", body_right)
        ],
        [
            Paragraph("<i>Generative AI Internship</i>", body_italic),
            Paragraph("", body_right)
        ]
    ]
    t_e1 = Table(e1_header, colWidths=[380, 160])
    t_e1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_e1)
    story.append(Spacer(1, 2))

    # Exp 2: Hindalco Industries
    e2_header = [
        [
            Paragraph("<b>Hindalco Industries Internship</b>", body_bold),
            Paragraph("<b>June 2026–August 2026</b>", body_right)
        ],
        [
            Paragraph("<i>Software Development Intern</i>", body_italic),
            Paragraph("", body_right)
        ]
    ]
    t_e2 = Table(e2_header, colWidths=[380, 160])
    t_e2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_e2)
    story.append(Paragraph("– Developed an AI-Based Scrap Management System for monitoring and analyzing industrial scrap data", bullet_style))
    story.append(Paragraph("– Designed REST APIs using Node.js and Express.js for scrap inventory and reporting modules.", bullet_style))
    story.append(Paragraph("– Implemented database operations using MongoDB/MySQL for efficient data management.", bullet_style))
    story.append(Paragraph("– Built dashboards and reports to visualize scrap generation, recycling efficiency, and inventory status.", bullet_style))
    story.append(Spacer(1, 2))

    # Exp 3: Cognifyz Technologies
    e3_header = [
        [
            Paragraph("<b>Cognifyz Technologies</b>", body_bold),
            Paragraph("<b>June 2026–July 2026</b>", body_right)
        ],
        [
            Paragraph("<i>Software Engineer Intern</i>", body_italic),
            Paragraph("", body_right)
        ]
    ]
    t_e3 = Table(e3_header, colWidths=[380, 160])
    t_e3.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_e3)
    story.append(Paragraph("– Worked with Git and GitHub for version control and collaborative development.", bullet_style))
    story.append(Paragraph("– Participated in software development lifecycle activities including coding, testing, and debugging.", bullet_style))
    story.append(Paragraph("– Improved problem-solving and software engineering skills through hands-on project execution.", bullet_style))
    story.append(Spacer(1, 3))

    # --- Awards ---
    add_section_divider("Awards")
    awards_data = [
        [Paragraph("TechnicalSkills Certificate", body_regular), Paragraph("<b>2026</b>", body_right)],
        [Paragraph("Most Transformed Award", body_regular), Paragraph("<b>April 2026, 2025-2026</b>", body_right)],
        [Paragraph("Hackathon Event Certification, Finalist", body_regular), Paragraph("<b>Nov 2025</b>", body_right)],
        [Paragraph("Poster Design Competition; volunteering", body_regular), Paragraph("<b>October 2024</b>", body_right)],
        [Paragraph("Core Python Programming", body_regular), Paragraph("<b>October 2023</b>", body_right)],
        [Paragraph("Sport Competition, 1st Place", body_regular), Paragraph("<b>Nov 2023</b>", body_right)]
    ]
    t_awards = Table(awards_data, colWidths=[380, 160])
    t_awards.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_awards)

    doc.build(story)
    print(f"Generated new resume successfully at: {output_path}")

if __name__ == '__main__':
    public_target = os.path.abspath('public/Rahul_Chaurasiya_Resume.pdf')
    dist_target = os.path.abspath('dist/Rahul_Chaurasiya_Resume.pdf')
    generate_resume(public_target)
    if os.path.exists('dist'):
        generate_resume(dist_target)
